import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import {
    assetService,
    GetAssetsInputSchema,
    DeleteAssetInputSchema,
} from '@/lib/services/asset-service';
async function getSessionUser() {
    try {
        const session = await auth.api.getSession({
            headers: await headers(),
        });
        return session?.user ?? null;
    } catch {
        return null;
    }
}
export async function GET(request: NextRequest) {
    const user = await getSessionUser();
    if (!user) {
        return NextResponse.json(
            { success: false, error: 'Unauthorized', code: 'UNAUTHORIZED' },
            { status: 401 }
        );
    }
    const searchParams = request.nextUrl.searchParams;
    const rawInput = {
        filter: searchParams.get('filter') || 'all',
        sortBy: searchParams.get('sortBy') || 'date',
        sortDirection: searchParams.get('sortDirection') || 'desc',
        page: parseInt(searchParams.get('page') || '1', 10),
        limit: parseInt(searchParams.get('limit') || '20', 10),
    };
    const validation = GetAssetsInputSchema.safeParse(rawInput);
    if (!validation.success) {
        return NextResponse.json(
            {
                success: false,
                error: 'Invalid request parameters',
                code: 'VALIDATION_ERROR',
            },
            { status: 400 }
        );
    }
    const result = await assetService.getAssets(user.id, validation.data);
    if (!result.success) {
        const statusCode = result.code === 'VALIDATION_ERROR' ? 400 : 500;
        return NextResponse.json(result, { status: statusCode });
    }
    return NextResponse.json(result);
}
export async function DELETE(request: NextRequest) {
    const user = await getSessionUser();
    if (!user) {
        return NextResponse.json(
            { success: false, error: 'Unauthorized', code: 'UNAUTHORIZED' },
            { status: 401 }
        );
    }
    const assetId = request.nextUrl.searchParams.get('id');
    const validation = DeleteAssetInputSchema.safeParse({ assetId });
    if (!validation.success) {
        return NextResponse.json(
            { success: false, error: 'Asset ID is required', code: 'VALIDATION_ERROR' },
            { status: 400 }
        );
    }
    const result = await assetService.deleteAsset(user.id, validation.data);
    if (!result.success) {
        const statusCode = result.code === 'NOT_FOUND' ? 404 : 500;
        return NextResponse.json(result, { status: statusCode });
    }
    return NextResponse.json(result);
}