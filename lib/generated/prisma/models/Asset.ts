import type * as runtime from "@prisma/client/runtime/client"
import type * as $Enums from "../enums"
import type * as Prisma from "../internal/prismaNamespace"
export type AssetModel = runtime.Types.Result.DefaultSelection<Prisma.$AssetPayload>
export type AggregateAsset = {
  _count: AssetCountAggregateOutputType | null
  _avg: AssetAvgAggregateOutputType | null
  _sum: AssetSumAggregateOutputType | null
  _min: AssetMinAggregateOutputType | null
  _max: AssetMaxAggregateOutputType | null
}
export type AssetAvgAggregateOutputType = {
  size: number | null
  width: number | null
  height: number | null
  duration: number | null
}
export type AssetSumAggregateOutputType = {
  size: number | null
  width: number | null
  height: number | null
  duration: number | null
}
export type AssetMinAggregateOutputType = {
  id: string | null
  userId: string | null
  name: string | null
  url: string | null
  thumbnailUrl: string | null
  type: $Enums.AssetType | null
  size: number | null
  width: number | null
  height: number | null
  duration: number | null
  createdAt: Date | null
}
export type AssetMaxAggregateOutputType = {
  id: string | null
  userId: string | null
  name: string | null
  url: string | null
  thumbnailUrl: string | null
  type: $Enums.AssetType | null
  size: number | null
  width: number | null
  height: number | null
  duration: number | null
  createdAt: Date | null
}
export type AssetCountAggregateOutputType = {
  id: number
  userId: number
  name: number
  url: number
  thumbnailUrl: number
  type: number
  size: number
  width: number
  height: number
  duration: number
  createdAt: number
  _all: number
}
export type AssetAvgAggregateInputType = {
  size?: true
  width?: true
  height?: true
  duration?: true
}
export type AssetSumAggregateInputType = {
  size?: true
  width?: true
  height?: true
  duration?: true
}
export type AssetMinAggregateInputType = {
  id?: true
  userId?: true
  name?: true
  url?: true
  thumbnailUrl?: true
  type?: true
  size?: true
  width?: true
  height?: true
  duration?: true
  createdAt?: true
}
export type AssetMaxAggregateInputType = {
  id?: true
  userId?: true
  name?: true
  url?: true
  thumbnailUrl?: true
  type?: true
  size?: true
  width?: true
  height?: true
  duration?: true
  createdAt?: true
}
export type AssetCountAggregateInputType = {
  id?: true
  userId?: true
  name?: true
  url?: true
  thumbnailUrl?: true
  type?: true
  size?: true
  width?: true
  height?: true
  duration?: true
  createdAt?: true
  _all?: true
}
export type AssetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AssetWhereInput
  orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[]
  cursor?: Prisma.AssetWhereUniqueInput
  take?: number
  skip?: number
  _count?: true | AssetCountAggregateInputType
  _avg?: AssetAvgAggregateInputType
  _sum?: AssetSumAggregateInputType
  _min?: AssetMinAggregateInputType
  _max?: AssetMaxAggregateInputType
}
export type GetAssetAggregateType<T extends AssetAggregateArgs> = {
      [P in keyof T & keyof AggregateAsset]: P extends '_count' | 'count'
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateAsset[P]>
    : Prisma.GetScalarType<T[P], AggregateAsset[P]>
}
export type AssetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AssetWhereInput
  orderBy?: Prisma.AssetOrderByWithAggregationInput | Prisma.AssetOrderByWithAggregationInput[]
  by: Prisma.AssetScalarFieldEnum[] | Prisma.AssetScalarFieldEnum
  having?: Prisma.AssetScalarWhereWithAggregatesInput
  take?: number
  skip?: number
  _count?: AssetCountAggregateInputType | true
  _avg?: AssetAvgAggregateInputType
  _sum?: AssetSumAggregateInputType
  _min?: AssetMinAggregateInputType
  _max?: AssetMaxAggregateInputType
}
export type AssetGroupByOutputType = {
  id: string
  userId: string
  name: string
  url: string
  thumbnailUrl: string | null
  type: $Enums.AssetType
  size: number
  width: number | null
  height: number | null
  duration: number | null
  createdAt: Date
  _count: AssetCountAggregateOutputType | null
  _avg: AssetAvgAggregateOutputType | null
  _sum: AssetSumAggregateOutputType | null
  _min: AssetMinAggregateOutputType | null
  _max: AssetMaxAggregateOutputType | null
}
type GetAssetGroupByPayload<T extends AssetGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<AssetGroupByOutputType, T['by']> &
      {
        [P in ((keyof T) & (keyof AssetGroupByOutputType))]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>
          : Prisma.GetScalarType<T[P], AssetGroupByOutputType[P]>
      }
    >
  >
export type AssetWhereInput = {
  AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[]
  OR?: Prisma.AssetWhereInput[]
  NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[]
  id?: Prisma.StringFilter<"Asset"> | string
  userId?: Prisma.StringFilter<"Asset"> | string
  name?: Prisma.StringFilter<"Asset"> | string
  url?: Prisma.StringFilter<"Asset"> | string
  thumbnailUrl?: Prisma.StringNullableFilter<"Asset"> | string | null
  type?: Prisma.EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
  size?: Prisma.IntFilter<"Asset"> | number
  width?: Prisma.IntNullableFilter<"Asset"> | number | null
  height?: Prisma.IntNullableFilter<"Asset"> | number | null
  duration?: Prisma.FloatNullableFilter<"Asset"> | number | null
  createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string
  user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
  generations?: Prisma.GenerationListRelationFilter
}
export type AssetOrderByWithRelationInput = {
  id?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  url?: Prisma.SortOrder
  thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder
  type?: Prisma.SortOrder
  size?: Prisma.SortOrder
  width?: Prisma.SortOrderInput | Prisma.SortOrder
  height?: Prisma.SortOrderInput | Prisma.SortOrder
  duration?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  user?: Prisma.UserOrderByWithRelationInput
  generations?: Prisma.GenerationOrderByRelationAggregateInput
}
export type AssetWhereUniqueInput = Prisma.AtLeast<{
  id?: string
  AND?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[]
  OR?: Prisma.AssetWhereInput[]
  NOT?: Prisma.AssetWhereInput | Prisma.AssetWhereInput[]
  userId?: Prisma.StringFilter<"Asset"> | string
  name?: Prisma.StringFilter<"Asset"> | string
  url?: Prisma.StringFilter<"Asset"> | string
  thumbnailUrl?: Prisma.StringNullableFilter<"Asset"> | string | null
  type?: Prisma.EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
  size?: Prisma.IntFilter<"Asset"> | number
  width?: Prisma.IntNullableFilter<"Asset"> | number | null
  height?: Prisma.IntNullableFilter<"Asset"> | number | null
  duration?: Prisma.FloatNullableFilter<"Asset"> | number | null
  createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string
  user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>
  generations?: Prisma.GenerationListRelationFilter
}, "id">
export type AssetOrderByWithAggregationInput = {
  id?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  url?: Prisma.SortOrder
  thumbnailUrl?: Prisma.SortOrderInput | Prisma.SortOrder
  type?: Prisma.SortOrder
  size?: Prisma.SortOrder
  width?: Prisma.SortOrderInput | Prisma.SortOrder
  height?: Prisma.SortOrderInput | Prisma.SortOrder
  duration?: Prisma.SortOrderInput | Prisma.SortOrder
  createdAt?: Prisma.SortOrder
  _count?: Prisma.AssetCountOrderByAggregateInput
  _avg?: Prisma.AssetAvgOrderByAggregateInput
  _max?: Prisma.AssetMaxOrderByAggregateInput
  _min?: Prisma.AssetMinOrderByAggregateInput
  _sum?: Prisma.AssetSumOrderByAggregateInput
}
export type AssetScalarWhereWithAggregatesInput = {
  AND?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[]
  OR?: Prisma.AssetScalarWhereWithAggregatesInput[]
  NOT?: Prisma.AssetScalarWhereWithAggregatesInput | Prisma.AssetScalarWhereWithAggregatesInput[]
  id?: Prisma.StringWithAggregatesFilter<"Asset"> | string
  userId?: Prisma.StringWithAggregatesFilter<"Asset"> | string
  name?: Prisma.StringWithAggregatesFilter<"Asset"> | string
  url?: Prisma.StringWithAggregatesFilter<"Asset"> | string
  thumbnailUrl?: Prisma.StringNullableWithAggregatesFilter<"Asset"> | string | null
  type?: Prisma.EnumAssetTypeWithAggregatesFilter<"Asset"> | $Enums.AssetType
  size?: Prisma.IntWithAggregatesFilter<"Asset"> | number
  width?: Prisma.IntNullableWithAggregatesFilter<"Asset"> | number | null
  height?: Prisma.IntNullableWithAggregatesFilter<"Asset"> | number | null
  duration?: Prisma.FloatNullableWithAggregatesFilter<"Asset"> | number | null
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Asset"> | Date | string
}
export type AssetCreateInput = {
  id?: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
  user: Prisma.UserCreateNestedOneWithoutAssetsInput
  generations?: Prisma.GenerationCreateNestedManyWithoutAssetInput
}
export type AssetUncheckedCreateInput = {
  id?: string
  userId: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
  generations?: Prisma.GenerationUncheckedCreateNestedManyWithoutAssetInput
}
export type AssetUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  user?: Prisma.UserUpdateOneRequiredWithoutAssetsNestedInput
  generations?: Prisma.GenerationUpdateManyWithoutAssetNestedInput
}
export type AssetUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  userId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  generations?: Prisma.GenerationUncheckedUpdateManyWithoutAssetNestedInput
}
export type AssetCreateManyInput = {
  id?: string
  userId: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
}
export type AssetUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}
export type AssetUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  userId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}
export type AssetListRelationFilter = {
  every?: Prisma.AssetWhereInput
  some?: Prisma.AssetWhereInput
  none?: Prisma.AssetWhereInput
}
export type AssetOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder
}
export type AssetCountOrderByAggregateInput = {
  id?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  url?: Prisma.SortOrder
  thumbnailUrl?: Prisma.SortOrder
  type?: Prisma.SortOrder
  size?: Prisma.SortOrder
  width?: Prisma.SortOrder
  height?: Prisma.SortOrder
  duration?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}
export type AssetAvgOrderByAggregateInput = {
  size?: Prisma.SortOrder
  width?: Prisma.SortOrder
  height?: Prisma.SortOrder
  duration?: Prisma.SortOrder
}
export type AssetMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  url?: Prisma.SortOrder
  thumbnailUrl?: Prisma.SortOrder
  type?: Prisma.SortOrder
  size?: Prisma.SortOrder
  width?: Prisma.SortOrder
  height?: Prisma.SortOrder
  duration?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}
export type AssetMinOrderByAggregateInput = {
  id?: Prisma.SortOrder
  userId?: Prisma.SortOrder
  name?: Prisma.SortOrder
  url?: Prisma.SortOrder
  thumbnailUrl?: Prisma.SortOrder
  type?: Prisma.SortOrder
  size?: Prisma.SortOrder
  width?: Prisma.SortOrder
  height?: Prisma.SortOrder
  duration?: Prisma.SortOrder
  createdAt?: Prisma.SortOrder
}
export type AssetSumOrderByAggregateInput = {
  size?: Prisma.SortOrder
  width?: Prisma.SortOrder
  height?: Prisma.SortOrder
  duration?: Prisma.SortOrder
}
export type AssetScalarRelationFilter = {
  is?: Prisma.AssetWhereInput
  isNot?: Prisma.AssetWhereInput
}
export type AssetCreateNestedManyWithoutUserInput = {
  create?: Prisma.XOR<Prisma.AssetCreateWithoutUserInput, Prisma.AssetUncheckedCreateWithoutUserInput> | Prisma.AssetCreateWithoutUserInput[] | Prisma.AssetUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.AssetCreateOrConnectWithoutUserInput | Prisma.AssetCreateOrConnectWithoutUserInput[]
  createMany?: Prisma.AssetCreateManyUserInputEnvelope
  connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
}
export type AssetUncheckedCreateNestedManyWithoutUserInput = {
  create?: Prisma.XOR<Prisma.AssetCreateWithoutUserInput, Prisma.AssetUncheckedCreateWithoutUserInput> | Prisma.AssetCreateWithoutUserInput[] | Prisma.AssetUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.AssetCreateOrConnectWithoutUserInput | Prisma.AssetCreateOrConnectWithoutUserInput[]
  createMany?: Prisma.AssetCreateManyUserInputEnvelope
  connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
}
export type AssetUpdateManyWithoutUserNestedInput = {
  create?: Prisma.XOR<Prisma.AssetCreateWithoutUserInput, Prisma.AssetUncheckedCreateWithoutUserInput> | Prisma.AssetCreateWithoutUserInput[] | Prisma.AssetUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.AssetCreateOrConnectWithoutUserInput | Prisma.AssetCreateOrConnectWithoutUserInput[]
  upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutUserInput | Prisma.AssetUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: Prisma.AssetCreateManyUserInputEnvelope
  set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  update?: Prisma.AssetUpdateWithWhereUniqueWithoutUserInput | Prisma.AssetUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: Prisma.AssetUpdateManyWithWhereWithoutUserInput | Prisma.AssetUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[]
}
export type AssetUncheckedUpdateManyWithoutUserNestedInput = {
  create?: Prisma.XOR<Prisma.AssetCreateWithoutUserInput, Prisma.AssetUncheckedCreateWithoutUserInput> | Prisma.AssetCreateWithoutUserInput[] | Prisma.AssetUncheckedCreateWithoutUserInput[]
  connectOrCreate?: Prisma.AssetCreateOrConnectWithoutUserInput | Prisma.AssetCreateOrConnectWithoutUserInput[]
  upsert?: Prisma.AssetUpsertWithWhereUniqueWithoutUserInput | Prisma.AssetUpsertWithWhereUniqueWithoutUserInput[]
  createMany?: Prisma.AssetCreateManyUserInputEnvelope
  set?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  disconnect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  delete?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  connect?: Prisma.AssetWhereUniqueInput | Prisma.AssetWhereUniqueInput[]
  update?: Prisma.AssetUpdateWithWhereUniqueWithoutUserInput | Prisma.AssetUpdateWithWhereUniqueWithoutUserInput[]
  updateMany?: Prisma.AssetUpdateManyWithWhereWithoutUserInput | Prisma.AssetUpdateManyWithWhereWithoutUserInput[]
  deleteMany?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[]
}
export type EnumAssetTypeFieldUpdateOperationsInput = {
  set?: $Enums.AssetType
}
export type NullableIntFieldUpdateOperationsInput = {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}
export type NullableFloatFieldUpdateOperationsInput = {
  set?: number | null
  increment?: number
  decrement?: number
  multiply?: number
  divide?: number
}
export type AssetCreateNestedOneWithoutGenerationsInput = {
  create?: Prisma.XOR<Prisma.AssetCreateWithoutGenerationsInput, Prisma.AssetUncheckedCreateWithoutGenerationsInput>
  connectOrCreate?: Prisma.AssetCreateOrConnectWithoutGenerationsInput
  connect?: Prisma.AssetWhereUniqueInput
}
export type AssetUpdateOneRequiredWithoutGenerationsNestedInput = {
  create?: Prisma.XOR<Prisma.AssetCreateWithoutGenerationsInput, Prisma.AssetUncheckedCreateWithoutGenerationsInput>
  connectOrCreate?: Prisma.AssetCreateOrConnectWithoutGenerationsInput
  upsert?: Prisma.AssetUpsertWithoutGenerationsInput
  connect?: Prisma.AssetWhereUniqueInput
  update?: Prisma.XOR<Prisma.XOR<Prisma.AssetUpdateToOneWithWhereWithoutGenerationsInput, Prisma.AssetUpdateWithoutGenerationsInput>, Prisma.AssetUncheckedUpdateWithoutGenerationsInput>
}
export type AssetCreateWithoutUserInput = {
  id?: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
  generations?: Prisma.GenerationCreateNestedManyWithoutAssetInput
}
export type AssetUncheckedCreateWithoutUserInput = {
  id?: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
  generations?: Prisma.GenerationUncheckedCreateNestedManyWithoutAssetInput
}
export type AssetCreateOrConnectWithoutUserInput = {
  where: Prisma.AssetWhereUniqueInput
  create: Prisma.XOR<Prisma.AssetCreateWithoutUserInput, Prisma.AssetUncheckedCreateWithoutUserInput>
}
export type AssetCreateManyUserInputEnvelope = {
  data: Prisma.AssetCreateManyUserInput | Prisma.AssetCreateManyUserInput[]
  skipDuplicates?: boolean
}
export type AssetUpsertWithWhereUniqueWithoutUserInput = {
  where: Prisma.AssetWhereUniqueInput
  update: Prisma.XOR<Prisma.AssetUpdateWithoutUserInput, Prisma.AssetUncheckedUpdateWithoutUserInput>
  create: Prisma.XOR<Prisma.AssetCreateWithoutUserInput, Prisma.AssetUncheckedCreateWithoutUserInput>
}
export type AssetUpdateWithWhereUniqueWithoutUserInput = {
  where: Prisma.AssetWhereUniqueInput
  data: Prisma.XOR<Prisma.AssetUpdateWithoutUserInput, Prisma.AssetUncheckedUpdateWithoutUserInput>
}
export type AssetUpdateManyWithWhereWithoutUserInput = {
  where: Prisma.AssetScalarWhereInput
  data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyWithoutUserInput>
}
export type AssetScalarWhereInput = {
  AND?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[]
  OR?: Prisma.AssetScalarWhereInput[]
  NOT?: Prisma.AssetScalarWhereInput | Prisma.AssetScalarWhereInput[]
  id?: Prisma.StringFilter<"Asset"> | string
  userId?: Prisma.StringFilter<"Asset"> | string
  name?: Prisma.StringFilter<"Asset"> | string
  url?: Prisma.StringFilter<"Asset"> | string
  thumbnailUrl?: Prisma.StringNullableFilter<"Asset"> | string | null
  type?: Prisma.EnumAssetTypeFilter<"Asset"> | $Enums.AssetType
  size?: Prisma.IntFilter<"Asset"> | number
  width?: Prisma.IntNullableFilter<"Asset"> | number | null
  height?: Prisma.IntNullableFilter<"Asset"> | number | null
  duration?: Prisma.FloatNullableFilter<"Asset"> | number | null
  createdAt?: Prisma.DateTimeFilter<"Asset"> | Date | string
}
export type AssetCreateWithoutGenerationsInput = {
  id?: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
  user: Prisma.UserCreateNestedOneWithoutAssetsInput
}
export type AssetUncheckedCreateWithoutGenerationsInput = {
  id?: string
  userId: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
}
export type AssetCreateOrConnectWithoutGenerationsInput = {
  where: Prisma.AssetWhereUniqueInput
  create: Prisma.XOR<Prisma.AssetCreateWithoutGenerationsInput, Prisma.AssetUncheckedCreateWithoutGenerationsInput>
}
export type AssetUpsertWithoutGenerationsInput = {
  update: Prisma.XOR<Prisma.AssetUpdateWithoutGenerationsInput, Prisma.AssetUncheckedUpdateWithoutGenerationsInput>
  create: Prisma.XOR<Prisma.AssetCreateWithoutGenerationsInput, Prisma.AssetUncheckedCreateWithoutGenerationsInput>
  where?: Prisma.AssetWhereInput
}
export type AssetUpdateToOneWithWhereWithoutGenerationsInput = {
  where?: Prisma.AssetWhereInput
  data: Prisma.XOR<Prisma.AssetUpdateWithoutGenerationsInput, Prisma.AssetUncheckedUpdateWithoutGenerationsInput>
}
export type AssetUpdateWithoutGenerationsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  user?: Prisma.UserUpdateOneRequiredWithoutAssetsNestedInput
}
export type AssetUncheckedUpdateWithoutGenerationsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  userId?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}
export type AssetCreateManyUserInput = {
  id?: string
  name?: string
  url: string
  thumbnailUrl?: string | null
  type: $Enums.AssetType
  size?: number
  width?: number | null
  height?: number | null
  duration?: number | null
  createdAt?: Date | string
}
export type AssetUpdateWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  generations?: Prisma.GenerationUpdateManyWithoutAssetNestedInput
}
export type AssetUncheckedUpdateWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
  generations?: Prisma.GenerationUncheckedUpdateManyWithoutAssetNestedInput
}
export type AssetUncheckedUpdateManyWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string
  name?: Prisma.StringFieldUpdateOperationsInput | string
  url?: Prisma.StringFieldUpdateOperationsInput | string
  thumbnailUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null
  type?: Prisma.EnumAssetTypeFieldUpdateOperationsInput | $Enums.AssetType
  size?: Prisma.IntFieldUpdateOperationsInput | number
  width?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  height?: Prisma.NullableIntFieldUpdateOperationsInput | number | null
  duration?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string
}
export type AssetCountOutputType = {
  generations: number
}
export type AssetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  generations?: boolean | AssetCountOutputTypeCountGenerationsArgs
}
export type AssetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetCountOutputTypeSelect<ExtArgs> | null
}
export type AssetCountOutputTypeCountGenerationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.GenerationWhereInput
}
export type AssetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  userId?: boolean
  name?: boolean
  url?: boolean
  thumbnailUrl?: boolean
  type?: boolean
  size?: boolean
  width?: boolean
  height?: boolean
  duration?: boolean
  createdAt?: boolean
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
  generations?: boolean | Prisma.Asset$generationsArgs<ExtArgs>
  _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>
}, ExtArgs["result"]["asset"]>
export type AssetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  userId?: boolean
  name?: boolean
  url?: boolean
  thumbnailUrl?: boolean
  type?: boolean
  size?: boolean
  width?: boolean
  height?: boolean
  duration?: boolean
  createdAt?: boolean
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["asset"]>
export type AssetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
  id?: boolean
  userId?: boolean
  name?: boolean
  url?: boolean
  thumbnailUrl?: boolean
  type?: boolean
  size?: boolean
  width?: boolean
  height?: boolean
  duration?: boolean
  createdAt?: boolean
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}, ExtArgs["result"]["asset"]>
export type AssetSelectScalar = {
  id?: boolean
  userId?: boolean
  name?: boolean
  url?: boolean
  thumbnailUrl?: boolean
  type?: boolean
  size?: boolean
  width?: boolean
  height?: boolean
  duration?: boolean
  createdAt?: boolean
}
export type AssetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "name" | "url" | "thumbnailUrl" | "type" | "size" | "width" | "height" | "duration" | "createdAt", ExtArgs["result"]["asset"]>
export type AssetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
  generations?: boolean | Prisma.Asset$generationsArgs<ExtArgs>
  _count?: boolean | Prisma.AssetCountOutputTypeDefaultArgs<ExtArgs>
}
export type AssetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type AssetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>
}
export type $AssetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  name: "Asset"
  objects: {
    user: Prisma.$UserPayload<ExtArgs>
    generations: Prisma.$GenerationPayload<ExtArgs>[]
  }
  scalars: runtime.Types.Extensions.GetPayloadResult<{
    id: string
    userId: string
    name: string
    url: string
    thumbnailUrl: string | null
    type: $Enums.AssetType
    size: number
    width: number | null
    height: number | null
    duration: number | null
    createdAt: Date
  }, ExtArgs["result"]["asset"]>
  composites: {}
}
export type AssetGetPayload<S extends boolean | null | undefined | AssetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AssetPayload, S>
export type AssetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> =
  Omit<AssetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AssetCountAggregateInputType | true
  }
export interface AssetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Asset'], meta: { name: 'Asset' } }
  findUnique<T extends AssetFindUniqueArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  findUniqueOrThrow<T extends AssetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AssetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
  findFirst<T extends AssetFindFirstArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
  findFirstOrThrow<T extends AssetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AssetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
  findMany<T extends AssetFindManyArgs>(args?: Prisma.SelectSubset<T, AssetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>
  create<T extends AssetCreateArgs>(args: Prisma.SelectSubset<T, AssetCreateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
  createMany<T extends AssetCreateManyArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>
  createManyAndReturn<T extends AssetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AssetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>
  delete<T extends AssetDeleteArgs>(args: Prisma.SelectSubset<T, AssetDeleteArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
  update<T extends AssetUpdateArgs>(args: Prisma.SelectSubset<T, AssetUpdateArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
  deleteMany<T extends AssetDeleteManyArgs>(args?: Prisma.SelectSubset<T, AssetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>
  updateMany<T extends AssetUpdateManyArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>
  updateManyAndReturn<T extends AssetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AssetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>
  upsert<T extends AssetUpsertArgs>(args: Prisma.SelectSubset<T, AssetUpsertArgs<ExtArgs>>): Prisma.Prisma__AssetClient<runtime.Types.Result.GetResult<Prisma.$AssetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>
  count<T extends AssetCountArgs>(
    args?: Prisma.Subset<T, AssetCountArgs>,
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<'select', any>
      ? T['select'] extends true
        ? number
        : Prisma.GetScalarType<T['select'], AssetCountAggregateOutputType>
      : number
  >
  aggregate<T extends AssetAggregateArgs>(args: Prisma.Subset<T, AssetAggregateArgs>): Prisma.PrismaPromise<GetAssetAggregateType<T>>
  groupBy<
    T extends AssetGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<'skip', Prisma.Keys<T>>,
      Prisma.Extends<'take', Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: AssetGroupByArgs['orderBy'] }
      : { orderBy?: AssetGroupByArgs['orderBy'] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>,
    ByFields extends Prisma.MaybeTupleToUnion<T['by']>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T['having']>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
    ? `Error: "by" must not be empty.`
    : HavingValid extends Prisma.False
    ? {
        [P in HavingFields]: P extends ByFields
          ? never
          : P extends string
          ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
          : [
              Error,
              'Field ',
              P,
              ` in "having" needs to be provided in "by"`,
            ]
      }[HavingFields]
    : 'take' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "take", you also need to provide "orderBy"'
    : 'skip' extends Prisma.Keys<T>
    ? 'orderBy' extends Prisma.Keys<T>
      ? ByValid extends Prisma.True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
          }[OrderFields]
      : 'Error: If you provide "skip", you also need to provide "orderBy"'
    : ByValid extends Prisma.True
    ? {}
    : {
        [P in OrderFields]: P extends ByFields
          ? never
          : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
      }[OrderFields]
  >(args: Prisma.SubsetIntersection<T, AssetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
readonly fields: AssetFieldRefs;
}
export interface Prisma__AssetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise"
  user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
  generations<T extends Prisma.Asset$generationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Asset$generationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GenerationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
  then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>
  catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>
}
export interface AssetFieldRefs {
  readonly id: Prisma.FieldRef<"Asset", 'String'>
  readonly userId: Prisma.FieldRef<"Asset", 'String'>
  readonly name: Prisma.FieldRef<"Asset", 'String'>
  readonly url: Prisma.FieldRef<"Asset", 'String'>
  readonly thumbnailUrl: Prisma.FieldRef<"Asset", 'String'>
  readonly type: Prisma.FieldRef<"Asset", 'AssetType'>
  readonly size: Prisma.FieldRef<"Asset", 'Int'>
  readonly width: Prisma.FieldRef<"Asset", 'Int'>
  readonly height: Prisma.FieldRef<"Asset", 'Int'>
  readonly duration: Prisma.FieldRef<"Asset", 'Float'>
  readonly createdAt: Prisma.FieldRef<"Asset", 'DateTime'>
}
export type AssetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where: Prisma.AssetWhereUniqueInput
}
export type AssetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where: Prisma.AssetWhereUniqueInput
}
export type AssetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where?: Prisma.AssetWhereInput
  orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[]
  cursor?: Prisma.AssetWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[]
}
export type AssetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where?: Prisma.AssetWhereInput
  orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[]
  cursor?: Prisma.AssetWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[]
}
export type AssetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where?: Prisma.AssetWhereInput
  orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[]
  cursor?: Prisma.AssetWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[]
}
export type AssetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>
}
export type AssetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[]
  skipDuplicates?: boolean
}
export type AssetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelectCreateManyAndReturn<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  data: Prisma.AssetCreateManyInput | Prisma.AssetCreateManyInput[]
  skipDuplicates?: boolean
  include?: Prisma.AssetIncludeCreateManyAndReturn<ExtArgs> | null
}
export type AssetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  data: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>
  where: Prisma.AssetWhereUniqueInput
}
export type AssetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>
  where?: Prisma.AssetWhereInput
  limit?: number
}
export type AssetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelectUpdateManyAndReturn<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  data: Prisma.XOR<Prisma.AssetUpdateManyMutationInput, Prisma.AssetUncheckedUpdateManyInput>
  where?: Prisma.AssetWhereInput
  limit?: number
  include?: Prisma.AssetIncludeUpdateManyAndReturn<ExtArgs> | null
}
export type AssetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where: Prisma.AssetWhereUniqueInput
  create: Prisma.XOR<Prisma.AssetCreateInput, Prisma.AssetUncheckedCreateInput>
  update: Prisma.XOR<Prisma.AssetUpdateInput, Prisma.AssetUncheckedUpdateInput>
}
export type AssetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
  where: Prisma.AssetWhereUniqueInput
}
export type AssetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  where?: Prisma.AssetWhereInput
  limit?: number
}
export type Asset$generationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null
  omit?: Prisma.GenerationOmit<ExtArgs> | null
  include?: Prisma.GenerationInclude<ExtArgs> | null
  where?: Prisma.GenerationWhereInput
  orderBy?: Prisma.GenerationOrderByWithRelationInput | Prisma.GenerationOrderByWithRelationInput[]
  cursor?: Prisma.GenerationWhereUniqueInput
  take?: number
  skip?: number
  distinct?: Prisma.GenerationScalarFieldEnum | Prisma.GenerationScalarFieldEnum[]
}
export type AssetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
  select?: Prisma.AssetSelect<ExtArgs> | null
  omit?: Prisma.AssetOmit<ExtArgs> | null
  include?: Prisma.AssetInclude<ExtArgs> | null
}