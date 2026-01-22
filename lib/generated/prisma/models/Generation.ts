import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type GenerationModel = runtime.Types.Result.DefaultSelection<Prisma.$GenerationPayload>;
export type AggregateGeneration = {
  _count: GenerationCountAggregateOutputType | null;
  _avg: GenerationAvgAggregateOutputType | null;
  _sum: GenerationSumAggregateOutputType | null;
  _min: GenerationMinAggregateOutputType | null;
  _max: GenerationMaxAggregateOutputType | null;
};
export type GenerationAvgAggregateOutputType = {
  cost: number | null;
};
export type GenerationSumAggregateOutputType = {
  cost: number | null;
};
export type GenerationMinAggregateOutputType = {
  id: string | null;
  userId: string | null;
  templateId: string | null;
  assetId: string | null;
  status: $Enums.JobStatus | null;
  failureReason: string | null;
  cost: number | null;
  providerJobId: string | null;
  resultUrl: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};
export type GenerationMaxAggregateOutputType = {
  id: string | null;
  userId: string | null;
  templateId: string | null;
  assetId: string | null;
  status: $Enums.JobStatus | null;
  failureReason: string | null;
  cost: number | null;
  providerJobId: string | null;
  resultUrl: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};
export type GenerationCountAggregateOutputType = {
  id: number;
  userId: number;
  templateId: number;
  assetId: number;
  status: number;
  failureReason: number;
  cost: number;
  providerJobId: number;
  resultUrl: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
};
export type GenerationAvgAggregateInputType = {
  cost?: true;
};
export type GenerationSumAggregateInputType = {
  cost?: true;
};
export type GenerationMinAggregateInputType = {
  id?: true;
  userId?: true;
  templateId?: true;
  assetId?: true;
  status?: true;
  failureReason?: true;
  cost?: true;
  providerJobId?: true;
  resultUrl?: true;
  createdAt?: true;
  updatedAt?: true;
};
export type GenerationMaxAggregateInputType = {
  id?: true;
  userId?: true;
  templateId?: true;
  assetId?: true;
  status?: true;
  failureReason?: true;
  cost?: true;
  providerJobId?: true;
  resultUrl?: true;
  createdAt?: true;
  updatedAt?: true;
};
export type GenerationCountAggregateInputType = {
  id?: true;
  userId?: true;
  templateId?: true;
  assetId?: true;
  status?: true;
  failureReason?: true;
  cost?: true;
  providerJobId?: true;
  resultUrl?: true;
  createdAt?: true;
  updatedAt?: true;
  _all?: true;
};
export type GenerationAggregateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.GenerationWhereInput;
  orderBy?: Prisma.GenerationOrderByWithRelationInput | Prisma.GenerationOrderByWithRelationInput[];
  cursor?: Prisma.GenerationWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: true | GenerationCountAggregateInputType;
  _avg?: GenerationAvgAggregateInputType;
  _sum?: GenerationSumAggregateInputType;
  _min?: GenerationMinAggregateInputType;
  _max?: GenerationMaxAggregateInputType;
};
export type GetGenerationAggregateType<T extends GenerationAggregateArgs> = {
  [P in keyof T & keyof AggregateGeneration]: P extends "_count" | "count"
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateGeneration[P]>
    : Prisma.GetScalarType<T[P], AggregateGeneration[P]>;
};
export type GenerationGroupByArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.GenerationWhereInput;
  orderBy?:
    | Prisma.GenerationOrderByWithAggregationInput
    | Prisma.GenerationOrderByWithAggregationInput[];
  by: Prisma.GenerationScalarFieldEnum[] | Prisma.GenerationScalarFieldEnum;
  having?: Prisma.GenerationScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
  _count?: GenerationCountAggregateInputType | true;
  _avg?: GenerationAvgAggregateInputType;
  _sum?: GenerationSumAggregateInputType;
  _min?: GenerationMinAggregateInputType;
  _max?: GenerationMaxAggregateInputType;
};
export type GenerationGroupByOutputType = {
  id: string;
  userId: string;
  templateId: string | null;
  assetId: string;
  status: $Enums.JobStatus;
  failureReason: string | null;
  cost: number;
  providerJobId: string | null;
  resultUrl: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count: GenerationCountAggregateOutputType | null;
  _avg: GenerationAvgAggregateOutputType | null;
  _sum: GenerationSumAggregateOutputType | null;
  _min: GenerationMinAggregateOutputType | null;
  _max: GenerationMaxAggregateOutputType | null;
};
type GetGenerationGroupByPayload<T extends GenerationGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<GenerationGroupByOutputType, T["by"]> & {
      [P in keyof T & keyof GenerationGroupByOutputType]: P extends "_count"
        ? T[P] extends boolean
          ? number
          : Prisma.GetScalarType<T[P], GenerationGroupByOutputType[P]>
        : Prisma.GetScalarType<T[P], GenerationGroupByOutputType[P]>;
    }
  >
>;
export type GenerationWhereInput = {
  AND?: Prisma.GenerationWhereInput | Prisma.GenerationWhereInput[];
  OR?: Prisma.GenerationWhereInput[];
  NOT?: Prisma.GenerationWhereInput | Prisma.GenerationWhereInput[];
  id?: Prisma.StringFilter<"Generation"> | string;
  userId?: Prisma.StringFilter<"Generation"> | string;
  templateId?: Prisma.StringNullableFilter<"Generation"> | string | null;
  assetId?: Prisma.StringFilter<"Generation"> | string;
  status?: Prisma.EnumJobStatusFilter<"Generation"> | $Enums.JobStatus;
  failureReason?: Prisma.StringNullableFilter<"Generation"> | string | null;
  cost?: Prisma.IntFilter<"Generation"> | number;
  providerJobId?: Prisma.StringNullableFilter<"Generation"> | string | null;
  resultUrl?: Prisma.StringNullableFilter<"Generation"> | string | null;
  createdAt?: Prisma.DateTimeFilter<"Generation"> | Date | string;
  updatedAt?: Prisma.DateTimeFilter<"Generation"> | Date | string;
  user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
  template?: Prisma.XOR<
    Prisma.TemplateNullableScalarRelationFilter,
    Prisma.TemplateWhereInput
  > | null;
  asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
};
export type GenerationOrderByWithRelationInput = {
  id?: Prisma.SortOrder;
  userId?: Prisma.SortOrder;
  templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
  assetId?: Prisma.SortOrder;
  status?: Prisma.SortOrder;
  failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
  cost?: Prisma.SortOrder;
  providerJobId?: Prisma.SortOrderInput | Prisma.SortOrder;
  resultUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
  user?: Prisma.UserOrderByWithRelationInput;
  template?: Prisma.TemplateOrderByWithRelationInput;
  asset?: Prisma.AssetOrderByWithRelationInput;
};
export type GenerationWhereUniqueInput = Prisma.AtLeast<
  {
    id?: string;
    providerJobId?: string;
    AND?: Prisma.GenerationWhereInput | Prisma.GenerationWhereInput[];
    OR?: Prisma.GenerationWhereInput[];
    NOT?: Prisma.GenerationWhereInput | Prisma.GenerationWhereInput[];
    userId?: Prisma.StringFilter<"Generation"> | string;
    templateId?: Prisma.StringNullableFilter<"Generation"> | string | null;
    assetId?: Prisma.StringFilter<"Generation"> | string;
    status?: Prisma.EnumJobStatusFilter<"Generation"> | $Enums.JobStatus;
    failureReason?: Prisma.StringNullableFilter<"Generation"> | string | null;
    cost?: Prisma.IntFilter<"Generation"> | number;
    resultUrl?: Prisma.StringNullableFilter<"Generation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Generation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Generation"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    template?: Prisma.XOR<
      Prisma.TemplateNullableScalarRelationFilter,
      Prisma.TemplateWhereInput
    > | null;
    asset?: Prisma.XOR<Prisma.AssetScalarRelationFilter, Prisma.AssetWhereInput>;
  },
  "id" | "providerJobId"
>;
export type GenerationOrderByWithAggregationInput = {
  id?: Prisma.SortOrder;
  userId?: Prisma.SortOrder;
  templateId?: Prisma.SortOrderInput | Prisma.SortOrder;
  assetId?: Prisma.SortOrder;
  status?: Prisma.SortOrder;
  failureReason?: Prisma.SortOrderInput | Prisma.SortOrder;
  cost?: Prisma.SortOrder;
  providerJobId?: Prisma.SortOrderInput | Prisma.SortOrder;
  resultUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
  _count?: Prisma.GenerationCountOrderByAggregateInput;
  _avg?: Prisma.GenerationAvgOrderByAggregateInput;
  _max?: Prisma.GenerationMaxOrderByAggregateInput;
  _min?: Prisma.GenerationMinOrderByAggregateInput;
  _sum?: Prisma.GenerationSumOrderByAggregateInput;
};
export type GenerationScalarWhereWithAggregatesInput = {
  AND?:
    | Prisma.GenerationScalarWhereWithAggregatesInput
    | Prisma.GenerationScalarWhereWithAggregatesInput[];
  OR?: Prisma.GenerationScalarWhereWithAggregatesInput[];
  NOT?:
    | Prisma.GenerationScalarWhereWithAggregatesInput
    | Prisma.GenerationScalarWhereWithAggregatesInput[];
  id?: Prisma.StringWithAggregatesFilter<"Generation"> | string;
  userId?: Prisma.StringWithAggregatesFilter<"Generation"> | string;
  templateId?: Prisma.StringNullableWithAggregatesFilter<"Generation"> | string | null;
  assetId?: Prisma.StringWithAggregatesFilter<"Generation"> | string;
  status?: Prisma.EnumJobStatusWithAggregatesFilter<"Generation"> | $Enums.JobStatus;
  failureReason?: Prisma.StringNullableWithAggregatesFilter<"Generation"> | string | null;
  cost?: Prisma.IntWithAggregatesFilter<"Generation"> | number;
  providerJobId?: Prisma.StringNullableWithAggregatesFilter<"Generation"> | string | null;
  resultUrl?: Prisma.StringNullableWithAggregatesFilter<"Generation"> | string | null;
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"Generation"> | Date | string;
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Generation"> | Date | string;
};
export type GenerationCreateInput = {
  id?: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  user: Prisma.UserCreateNestedOneWithoutGenerationsInput;
  template?: Prisma.TemplateCreateNestedOneWithoutGenerationsInput;
  asset: Prisma.AssetCreateNestedOneWithoutGenerationsInput;
};
export type GenerationUncheckedCreateInput = {
  id?: string;
  userId: string;
  templateId?: string | null;
  assetId: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  user?: Prisma.UserUpdateOneRequiredWithoutGenerationsNestedInput;
  template?: Prisma.TemplateUpdateOneWithoutGenerationsNestedInput;
  asset?: Prisma.AssetUpdateOneRequiredWithoutGenerationsNestedInput;
};
export type GenerationUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  userId?: Prisma.StringFieldUpdateOperationsInput | string;
  templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  assetId?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationCreateManyInput = {
  id?: string;
  userId: string;
  templateId?: string | null;
  assetId: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  userId?: Prisma.StringFieldUpdateOperationsInput | string;
  templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  assetId?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationListRelationFilter = {
  every?: Prisma.GenerationWhereInput;
  some?: Prisma.GenerationWhereInput;
  none?: Prisma.GenerationWhereInput;
};
export type GenerationOrderByRelationAggregateInput = {
  _count?: Prisma.SortOrder;
};
export type GenerationCountOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  userId?: Prisma.SortOrder;
  templateId?: Prisma.SortOrder;
  assetId?: Prisma.SortOrder;
  status?: Prisma.SortOrder;
  failureReason?: Prisma.SortOrder;
  cost?: Prisma.SortOrder;
  providerJobId?: Prisma.SortOrder;
  resultUrl?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};
export type GenerationAvgOrderByAggregateInput = {
  cost?: Prisma.SortOrder;
};
export type GenerationMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  userId?: Prisma.SortOrder;
  templateId?: Prisma.SortOrder;
  assetId?: Prisma.SortOrder;
  status?: Prisma.SortOrder;
  failureReason?: Prisma.SortOrder;
  cost?: Prisma.SortOrder;
  providerJobId?: Prisma.SortOrder;
  resultUrl?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};
export type GenerationMinOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  userId?: Prisma.SortOrder;
  templateId?: Prisma.SortOrder;
  assetId?: Prisma.SortOrder;
  status?: Prisma.SortOrder;
  failureReason?: Prisma.SortOrder;
  cost?: Prisma.SortOrder;
  providerJobId?: Prisma.SortOrder;
  resultUrl?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};
export type GenerationSumOrderByAggregateInput = {
  cost?: Prisma.SortOrder;
};
export type GenerationCreateNestedManyWithoutUserInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutUserInput,
        Prisma.GenerationUncheckedCreateWithoutUserInput
      >
    | Prisma.GenerationCreateWithoutUserInput[]
    | Prisma.GenerationUncheckedCreateWithoutUserInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutUserInput
    | Prisma.GenerationCreateOrConnectWithoutUserInput[];
  createMany?: Prisma.GenerationCreateManyUserInputEnvelope;
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
};
export type GenerationUncheckedCreateNestedManyWithoutUserInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutUserInput,
        Prisma.GenerationUncheckedCreateWithoutUserInput
      >
    | Prisma.GenerationCreateWithoutUserInput[]
    | Prisma.GenerationUncheckedCreateWithoutUserInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutUserInput
    | Prisma.GenerationCreateOrConnectWithoutUserInput[];
  createMany?: Prisma.GenerationCreateManyUserInputEnvelope;
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
};
export type GenerationUpdateManyWithoutUserNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutUserInput,
        Prisma.GenerationUncheckedCreateWithoutUserInput
      >
    | Prisma.GenerationCreateWithoutUserInput[]
    | Prisma.GenerationUncheckedCreateWithoutUserInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutUserInput
    | Prisma.GenerationCreateOrConnectWithoutUserInput[];
  upsert?:
    | Prisma.GenerationUpsertWithWhereUniqueWithoutUserInput
    | Prisma.GenerationUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Prisma.GenerationCreateManyUserInputEnvelope;
  set?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  disconnect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  delete?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  update?:
    | Prisma.GenerationUpdateWithWhereUniqueWithoutUserInput
    | Prisma.GenerationUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?:
    | Prisma.GenerationUpdateManyWithWhereWithoutUserInput
    | Prisma.GenerationUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
};
export type GenerationUncheckedUpdateManyWithoutUserNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutUserInput,
        Prisma.GenerationUncheckedCreateWithoutUserInput
      >
    | Prisma.GenerationCreateWithoutUserInput[]
    | Prisma.GenerationUncheckedCreateWithoutUserInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutUserInput
    | Prisma.GenerationCreateOrConnectWithoutUserInput[];
  upsert?:
    | Prisma.GenerationUpsertWithWhereUniqueWithoutUserInput
    | Prisma.GenerationUpsertWithWhereUniqueWithoutUserInput[];
  createMany?: Prisma.GenerationCreateManyUserInputEnvelope;
  set?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  disconnect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  delete?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  update?:
    | Prisma.GenerationUpdateWithWhereUniqueWithoutUserInput
    | Prisma.GenerationUpdateWithWhereUniqueWithoutUserInput[];
  updateMany?:
    | Prisma.GenerationUpdateManyWithWhereWithoutUserInput
    | Prisma.GenerationUpdateManyWithWhereWithoutUserInput[];
  deleteMany?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
};
export type GenerationCreateNestedManyWithoutAssetInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutAssetInput,
        Prisma.GenerationUncheckedCreateWithoutAssetInput
      >
    | Prisma.GenerationCreateWithoutAssetInput[]
    | Prisma.GenerationUncheckedCreateWithoutAssetInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutAssetInput
    | Prisma.GenerationCreateOrConnectWithoutAssetInput[];
  createMany?: Prisma.GenerationCreateManyAssetInputEnvelope;
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
};
export type GenerationUncheckedCreateNestedManyWithoutAssetInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutAssetInput,
        Prisma.GenerationUncheckedCreateWithoutAssetInput
      >
    | Prisma.GenerationCreateWithoutAssetInput[]
    | Prisma.GenerationUncheckedCreateWithoutAssetInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutAssetInput
    | Prisma.GenerationCreateOrConnectWithoutAssetInput[];
  createMany?: Prisma.GenerationCreateManyAssetInputEnvelope;
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
};
export type GenerationUpdateManyWithoutAssetNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutAssetInput,
        Prisma.GenerationUncheckedCreateWithoutAssetInput
      >
    | Prisma.GenerationCreateWithoutAssetInput[]
    | Prisma.GenerationUncheckedCreateWithoutAssetInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutAssetInput
    | Prisma.GenerationCreateOrConnectWithoutAssetInput[];
  upsert?:
    | Prisma.GenerationUpsertWithWhereUniqueWithoutAssetInput
    | Prisma.GenerationUpsertWithWhereUniqueWithoutAssetInput[];
  createMany?: Prisma.GenerationCreateManyAssetInputEnvelope;
  set?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  disconnect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  delete?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  update?:
    | Prisma.GenerationUpdateWithWhereUniqueWithoutAssetInput
    | Prisma.GenerationUpdateWithWhereUniqueWithoutAssetInput[];
  updateMany?:
    | Prisma.GenerationUpdateManyWithWhereWithoutAssetInput
    | Prisma.GenerationUpdateManyWithWhereWithoutAssetInput[];
  deleteMany?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
};
export type GenerationUncheckedUpdateManyWithoutAssetNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutAssetInput,
        Prisma.GenerationUncheckedCreateWithoutAssetInput
      >
    | Prisma.GenerationCreateWithoutAssetInput[]
    | Prisma.GenerationUncheckedCreateWithoutAssetInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutAssetInput
    | Prisma.GenerationCreateOrConnectWithoutAssetInput[];
  upsert?:
    | Prisma.GenerationUpsertWithWhereUniqueWithoutAssetInput
    | Prisma.GenerationUpsertWithWhereUniqueWithoutAssetInput[];
  createMany?: Prisma.GenerationCreateManyAssetInputEnvelope;
  set?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  disconnect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  delete?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  update?:
    | Prisma.GenerationUpdateWithWhereUniqueWithoutAssetInput
    | Prisma.GenerationUpdateWithWhereUniqueWithoutAssetInput[];
  updateMany?:
    | Prisma.GenerationUpdateManyWithWhereWithoutAssetInput
    | Prisma.GenerationUpdateManyWithWhereWithoutAssetInput[];
  deleteMany?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
};
export type GenerationCreateNestedManyWithoutTemplateInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutTemplateInput,
        Prisma.GenerationUncheckedCreateWithoutTemplateInput
      >
    | Prisma.GenerationCreateWithoutTemplateInput[]
    | Prisma.GenerationUncheckedCreateWithoutTemplateInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput[];
  createMany?: Prisma.GenerationCreateManyTemplateInputEnvelope;
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
};
export type GenerationUncheckedCreateNestedManyWithoutTemplateInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutTemplateInput,
        Prisma.GenerationUncheckedCreateWithoutTemplateInput
      >
    | Prisma.GenerationCreateWithoutTemplateInput[]
    | Prisma.GenerationUncheckedCreateWithoutTemplateInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput[];
  createMany?: Prisma.GenerationCreateManyTemplateInputEnvelope;
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
};
export type GenerationUpdateManyWithoutTemplateNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutTemplateInput,
        Prisma.GenerationUncheckedCreateWithoutTemplateInput
      >
    | Prisma.GenerationCreateWithoutTemplateInput[]
    | Prisma.GenerationUncheckedCreateWithoutTemplateInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput[];
  upsert?:
    | Prisma.GenerationUpsertWithWhereUniqueWithoutTemplateInput
    | Prisma.GenerationUpsertWithWhereUniqueWithoutTemplateInput[];
  createMany?: Prisma.GenerationCreateManyTemplateInputEnvelope;
  set?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  disconnect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  delete?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  update?:
    | Prisma.GenerationUpdateWithWhereUniqueWithoutTemplateInput
    | Prisma.GenerationUpdateWithWhereUniqueWithoutTemplateInput[];
  updateMany?:
    | Prisma.GenerationUpdateManyWithWhereWithoutTemplateInput
    | Prisma.GenerationUpdateManyWithWhereWithoutTemplateInput[];
  deleteMany?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
};
export type GenerationUncheckedUpdateManyWithoutTemplateNestedInput = {
  create?:
    | Prisma.XOR<
        Prisma.GenerationCreateWithoutTemplateInput,
        Prisma.GenerationUncheckedCreateWithoutTemplateInput
      >
    | Prisma.GenerationCreateWithoutTemplateInput[]
    | Prisma.GenerationUncheckedCreateWithoutTemplateInput[];
  connectOrCreate?:
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput
    | Prisma.GenerationCreateOrConnectWithoutTemplateInput[];
  upsert?:
    | Prisma.GenerationUpsertWithWhereUniqueWithoutTemplateInput
    | Prisma.GenerationUpsertWithWhereUniqueWithoutTemplateInput[];
  createMany?: Prisma.GenerationCreateManyTemplateInputEnvelope;
  set?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  disconnect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  delete?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  connect?: Prisma.GenerationWhereUniqueInput | Prisma.GenerationWhereUniqueInput[];
  update?:
    | Prisma.GenerationUpdateWithWhereUniqueWithoutTemplateInput
    | Prisma.GenerationUpdateWithWhereUniqueWithoutTemplateInput[];
  updateMany?:
    | Prisma.GenerationUpdateManyWithWhereWithoutTemplateInput
    | Prisma.GenerationUpdateManyWithWhereWithoutTemplateInput[];
  deleteMany?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
};
export type EnumJobStatusFieldUpdateOperationsInput = {
  set?: $Enums.JobStatus;
};
export type GenerationCreateWithoutUserInput = {
  id?: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  template?: Prisma.TemplateCreateNestedOneWithoutGenerationsInput;
  asset: Prisma.AssetCreateNestedOneWithoutGenerationsInput;
};
export type GenerationUncheckedCreateWithoutUserInput = {
  id?: string;
  templateId?: string | null;
  assetId: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationCreateOrConnectWithoutUserInput = {
  where: Prisma.GenerationWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.GenerationCreateWithoutUserInput,
    Prisma.GenerationUncheckedCreateWithoutUserInput
  >;
};
export type GenerationCreateManyUserInputEnvelope = {
  data: Prisma.GenerationCreateManyUserInput | Prisma.GenerationCreateManyUserInput[];
  skipDuplicates?: boolean;
};
export type GenerationUpsertWithWhereUniqueWithoutUserInput = {
  where: Prisma.GenerationWhereUniqueInput;
  update: Prisma.XOR<
    Prisma.GenerationUpdateWithoutUserInput,
    Prisma.GenerationUncheckedUpdateWithoutUserInput
  >;
  create: Prisma.XOR<
    Prisma.GenerationCreateWithoutUserInput,
    Prisma.GenerationUncheckedCreateWithoutUserInput
  >;
};
export type GenerationUpdateWithWhereUniqueWithoutUserInput = {
  where: Prisma.GenerationWhereUniqueInput;
  data: Prisma.XOR<
    Prisma.GenerationUpdateWithoutUserInput,
    Prisma.GenerationUncheckedUpdateWithoutUserInput
  >;
};
export type GenerationUpdateManyWithWhereWithoutUserInput = {
  where: Prisma.GenerationScalarWhereInput;
  data: Prisma.XOR<
    Prisma.GenerationUpdateManyMutationInput,
    Prisma.GenerationUncheckedUpdateManyWithoutUserInput
  >;
};
export type GenerationScalarWhereInput = {
  AND?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
  OR?: Prisma.GenerationScalarWhereInput[];
  NOT?: Prisma.GenerationScalarWhereInput | Prisma.GenerationScalarWhereInput[];
  id?: Prisma.StringFilter<"Generation"> | string;
  userId?: Prisma.StringFilter<"Generation"> | string;
  templateId?: Prisma.StringNullableFilter<"Generation"> | string | null;
  assetId?: Prisma.StringFilter<"Generation"> | string;
  status?: Prisma.EnumJobStatusFilter<"Generation"> | $Enums.JobStatus;
  failureReason?: Prisma.StringNullableFilter<"Generation"> | string | null;
  cost?: Prisma.IntFilter<"Generation"> | number;
  providerJobId?: Prisma.StringNullableFilter<"Generation"> | string | null;
  resultUrl?: Prisma.StringNullableFilter<"Generation"> | string | null;
  createdAt?: Prisma.DateTimeFilter<"Generation"> | Date | string;
  updatedAt?: Prisma.DateTimeFilter<"Generation"> | Date | string;
};
export type GenerationCreateWithoutAssetInput = {
  id?: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  user: Prisma.UserCreateNestedOneWithoutGenerationsInput;
  template?: Prisma.TemplateCreateNestedOneWithoutGenerationsInput;
};
export type GenerationUncheckedCreateWithoutAssetInput = {
  id?: string;
  userId: string;
  templateId?: string | null;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationCreateOrConnectWithoutAssetInput = {
  where: Prisma.GenerationWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.GenerationCreateWithoutAssetInput,
    Prisma.GenerationUncheckedCreateWithoutAssetInput
  >;
};
export type GenerationCreateManyAssetInputEnvelope = {
  data: Prisma.GenerationCreateManyAssetInput | Prisma.GenerationCreateManyAssetInput[];
  skipDuplicates?: boolean;
};
export type GenerationUpsertWithWhereUniqueWithoutAssetInput = {
  where: Prisma.GenerationWhereUniqueInput;
  update: Prisma.XOR<
    Prisma.GenerationUpdateWithoutAssetInput,
    Prisma.GenerationUncheckedUpdateWithoutAssetInput
  >;
  create: Prisma.XOR<
    Prisma.GenerationCreateWithoutAssetInput,
    Prisma.GenerationUncheckedCreateWithoutAssetInput
  >;
};
export type GenerationUpdateWithWhereUniqueWithoutAssetInput = {
  where: Prisma.GenerationWhereUniqueInput;
  data: Prisma.XOR<
    Prisma.GenerationUpdateWithoutAssetInput,
    Prisma.GenerationUncheckedUpdateWithoutAssetInput
  >;
};
export type GenerationUpdateManyWithWhereWithoutAssetInput = {
  where: Prisma.GenerationScalarWhereInput;
  data: Prisma.XOR<
    Prisma.GenerationUpdateManyMutationInput,
    Prisma.GenerationUncheckedUpdateManyWithoutAssetInput
  >;
};
export type GenerationCreateWithoutTemplateInput = {
  id?: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  user: Prisma.UserCreateNestedOneWithoutGenerationsInput;
  asset: Prisma.AssetCreateNestedOneWithoutGenerationsInput;
};
export type GenerationUncheckedCreateWithoutTemplateInput = {
  id?: string;
  userId: string;
  assetId: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationCreateOrConnectWithoutTemplateInput = {
  where: Prisma.GenerationWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.GenerationCreateWithoutTemplateInput,
    Prisma.GenerationUncheckedCreateWithoutTemplateInput
  >;
};
export type GenerationCreateManyTemplateInputEnvelope = {
  data: Prisma.GenerationCreateManyTemplateInput | Prisma.GenerationCreateManyTemplateInput[];
  skipDuplicates?: boolean;
};
export type GenerationUpsertWithWhereUniqueWithoutTemplateInput = {
  where: Prisma.GenerationWhereUniqueInput;
  update: Prisma.XOR<
    Prisma.GenerationUpdateWithoutTemplateInput,
    Prisma.GenerationUncheckedUpdateWithoutTemplateInput
  >;
  create: Prisma.XOR<
    Prisma.GenerationCreateWithoutTemplateInput,
    Prisma.GenerationUncheckedCreateWithoutTemplateInput
  >;
};
export type GenerationUpdateWithWhereUniqueWithoutTemplateInput = {
  where: Prisma.GenerationWhereUniqueInput;
  data: Prisma.XOR<
    Prisma.GenerationUpdateWithoutTemplateInput,
    Prisma.GenerationUncheckedUpdateWithoutTemplateInput
  >;
};
export type GenerationUpdateManyWithWhereWithoutTemplateInput = {
  where: Prisma.GenerationScalarWhereInput;
  data: Prisma.XOR<
    Prisma.GenerationUpdateManyMutationInput,
    Prisma.GenerationUncheckedUpdateManyWithoutTemplateInput
  >;
};
export type GenerationCreateManyUserInput = {
  id?: string;
  templateId?: string | null;
  assetId: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationUpdateWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  template?: Prisma.TemplateUpdateOneWithoutGenerationsNestedInput;
  asset?: Prisma.AssetUpdateOneRequiredWithoutGenerationsNestedInput;
};
export type GenerationUncheckedUpdateWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  assetId?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationUncheckedUpdateManyWithoutUserInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  assetId?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationCreateManyAssetInput = {
  id?: string;
  userId: string;
  templateId?: string | null;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationUpdateWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  user?: Prisma.UserUpdateOneRequiredWithoutGenerationsNestedInput;
  template?: Prisma.TemplateUpdateOneWithoutGenerationsNestedInput;
};
export type GenerationUncheckedUpdateWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  userId?: Prisma.StringFieldUpdateOperationsInput | string;
  templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationUncheckedUpdateManyWithoutAssetInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  userId?: Prisma.StringFieldUpdateOperationsInput | string;
  templateId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationCreateManyTemplateInput = {
  id?: string;
  userId: string;
  assetId: string;
  status?: $Enums.JobStatus;
  failureReason?: string | null;
  cost?: number;
  providerJobId?: string | null;
  resultUrl?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type GenerationUpdateWithoutTemplateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  user?: Prisma.UserUpdateOneRequiredWithoutGenerationsNestedInput;
  asset?: Prisma.AssetUpdateOneRequiredWithoutGenerationsNestedInput;
};
export type GenerationUncheckedUpdateWithoutTemplateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  userId?: Prisma.StringFieldUpdateOperationsInput | string;
  assetId?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationUncheckedUpdateManyWithoutTemplateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  userId?: Prisma.StringFieldUpdateOperationsInput | string;
  assetId?: Prisma.StringFieldUpdateOperationsInput | string;
  status?: Prisma.EnumJobStatusFieldUpdateOperationsInput | $Enums.JobStatus;
  failureReason?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  cost?: Prisma.IntFieldUpdateOperationsInput | number;
  providerJobId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  resultUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GenerationSelect<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    assetId?: boolean;
    status?: boolean;
    failureReason?: boolean;
    cost?: boolean;
    providerJobId?: boolean;
    resultUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.Generation$templateArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
  },
  ExtArgs["result"]["generation"]
>;
export type GenerationSelectCreateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    assetId?: boolean;
    status?: boolean;
    failureReason?: boolean;
    cost?: boolean;
    providerJobId?: boolean;
    resultUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.Generation$templateArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
  },
  ExtArgs["result"]["generation"]
>;
export type GenerationSelectUpdateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    userId?: boolean;
    templateId?: boolean;
    assetId?: boolean;
    status?: boolean;
    failureReason?: boolean;
    cost?: boolean;
    providerJobId?: boolean;
    resultUrl?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    template?: boolean | Prisma.Generation$templateArgs<ExtArgs>;
    asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
  },
  ExtArgs["result"]["generation"]
>;
export type GenerationSelectScalar = {
  id?: boolean;
  userId?: boolean;
  templateId?: boolean;
  assetId?: boolean;
  status?: boolean;
  failureReason?: boolean;
  cost?: boolean;
  providerJobId?: boolean;
  resultUrl?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
};
export type GenerationOmit<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
  | "id"
  | "userId"
  | "templateId"
  | "assetId"
  | "status"
  | "failureReason"
  | "cost"
  | "providerJobId"
  | "resultUrl"
  | "createdAt"
  | "updatedAt",
  ExtArgs["result"]["generation"]
>;
export type GenerationInclude<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  template?: boolean | Prisma.Generation$templateArgs<ExtArgs>;
  asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type GenerationIncludeCreateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  template?: boolean | Prisma.Generation$templateArgs<ExtArgs>;
  asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type GenerationIncludeUpdateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
  template?: boolean | Prisma.Generation$templateArgs<ExtArgs>;
  asset?: boolean | Prisma.AssetDefaultArgs<ExtArgs>;
};
export type $GenerationPayload<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  name: "Generation";
  objects: {
    user: Prisma.$UserPayload<ExtArgs>;
    template: Prisma.$TemplatePayload<ExtArgs> | null;
    asset: Prisma.$AssetPayload<ExtArgs>;
  };
  scalars: runtime.Types.Extensions.GetPayloadResult<
    {
      id: string;
      userId: string;
      templateId: string | null;
      assetId: string;
      status: $Enums.JobStatus;
      failureReason: string | null;
      cost: number;
      providerJobId: string | null;
      resultUrl: string | null;
      createdAt: Date;
      updatedAt: Date;
    },
    ExtArgs["result"]["generation"]
  >;
  composites: {};
};
export type GenerationGetPayload<S extends boolean | null | undefined | GenerationDefaultArgs> =
  runtime.Types.Result.GetResult<Prisma.$GenerationPayload, S>;
export type GenerationCountArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<GenerationFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
  select?: GenerationCountAggregateInputType | true;
};
export interface GenerationDelegate<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> {
  [K: symbol]: {
    types: Prisma.TypeMap<ExtArgs>["model"]["Generation"];
    meta: { name: "Generation" };
  };
  findUnique<T extends GenerationFindUniqueArgs>(
    args: Prisma.SelectSubset<T, GenerationFindUniqueArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "findUnique",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  findUniqueOrThrow<T extends GenerationFindUniqueOrThrowArgs>(
    args: Prisma.SelectSubset<T, GenerationFindUniqueOrThrowArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "findUniqueOrThrow",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  findFirst<T extends GenerationFindFirstArgs>(
    args?: Prisma.SelectSubset<T, GenerationFindFirstArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "findFirst",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  findFirstOrThrow<T extends GenerationFindFirstOrThrowArgs>(
    args?: Prisma.SelectSubset<T, GenerationFindFirstOrThrowArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "findFirstOrThrow",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  findMany<T extends GenerationFindManyArgs>(
    args?: Prisma.SelectSubset<T, GenerationFindManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "findMany",
      GlobalOmitOptions
    >
  >;
  create<T extends GenerationCreateArgs>(
    args: Prisma.SelectSubset<T, GenerationCreateArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "create",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  createMany<T extends GenerationCreateManyArgs>(
    args?: Prisma.SelectSubset<T, GenerationCreateManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  createManyAndReturn<T extends GenerationCreateManyAndReturnArgs>(
    args?: Prisma.SelectSubset<T, GenerationCreateManyAndReturnArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "createManyAndReturn",
      GlobalOmitOptions
    >
  >;
  delete<T extends GenerationDeleteArgs>(
    args: Prisma.SelectSubset<T, GenerationDeleteArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "delete",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  update<T extends GenerationUpdateArgs>(
    args: Prisma.SelectSubset<T, GenerationUpdateArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "update",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  deleteMany<T extends GenerationDeleteManyArgs>(
    args?: Prisma.SelectSubset<T, GenerationDeleteManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  updateMany<T extends GenerationUpdateManyArgs>(
    args: Prisma.SelectSubset<T, GenerationUpdateManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  updateManyAndReturn<T extends GenerationUpdateManyAndReturnArgs>(
    args: Prisma.SelectSubset<T, GenerationUpdateManyAndReturnArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "updateManyAndReturn",
      GlobalOmitOptions
    >
  >;
  upsert<T extends GenerationUpsertArgs>(
    args: Prisma.SelectSubset<T, GenerationUpsertArgs<ExtArgs>>
  ): Prisma.Prisma__GenerationClient<
    runtime.Types.Result.GetResult<
      Prisma.$GenerationPayload<ExtArgs>,
      T,
      "upsert",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  count<T extends GenerationCountArgs>(
    args?: Prisma.Subset<T, GenerationCountArgs>
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<"select", any>
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], GenerationCountAggregateOutputType>
      : number
  >;
  aggregate<T extends GenerationAggregateArgs>(
    args: Prisma.Subset<T, GenerationAggregateArgs>
  ): Prisma.PrismaPromise<GetGenerationAggregateType<T>>;
  groupBy<
    T extends GenerationGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<"skip", Prisma.Keys<T>>,
      Prisma.Extends<"take", Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: GenerationGroupByArgs["orderBy"] }
      : { orderBy?: GenerationGroupByArgs["orderBy"] },
    OrderFields extends Prisma.ExcludeUnderscoreKeys<
      Prisma.Keys<Prisma.MaybeTupleToUnion<T["orderBy"]>>
    >,
    ByFields extends Prisma.MaybeTupleToUnion<T["by"]>,
    ByValid extends Prisma.Has<ByFields, OrderFields>,
    HavingFields extends Prisma.GetHavingFields<T["having"]>,
    HavingValid extends Prisma.Has<ByFields, HavingFields>,
    ByEmpty extends T["by"] extends never[] ? Prisma.True : Prisma.False,
    InputErrors extends ByEmpty extends Prisma.True
      ? `Error: "by" must not be empty.`
      : HavingValid extends Prisma.False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
                ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
                : [Error, "Field ", P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : "take" extends Prisma.Keys<T>
          ? "orderBy" extends Prisma.Keys<T>
            ? ByValid extends Prisma.True
              ? {}
              : {
                  [P in OrderFields]: P extends ByFields
                    ? never
                    : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                }[OrderFields]
            : 'Error: If you provide "take", you also need to provide "orderBy"'
          : "skip" extends Prisma.Keys<T>
            ? "orderBy" extends Prisma.Keys<T>
              ? ByValid extends Prisma.True
                ? {}
                : {
                    [P in OrderFields]: P extends ByFields
                      ? never
                      : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                  }[OrderFields]
              : 'Error: If you provide "skip", you also need to provide "orderBy"'
            : ByValid extends Prisma.True
              ? {}
              : {
                  [P in OrderFields]: P extends ByFields
                    ? never
                    : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
                }[OrderFields],
  >(
    args: Prisma.SubsetIntersection<T, GenerationGroupByArgs, OrderByArg> & InputErrors
  ): {} extends InputErrors ? GetGenerationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
  readonly fields: GenerationFieldRefs;
}
export interface Prisma__GenerationClient<
  T,
  Null = never,
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise";
  user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    | runtime.Types.Result.GetResult<
        Prisma.$UserPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >
    | Null,
    Null,
    ExtArgs,
    GlobalOmitOptions
  >;
  template<T extends Prisma.Generation$templateArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.Generation$templateArgs<ExtArgs>>
  ): Prisma.Prisma__TemplateClient<
    runtime.Types.Result.GetResult<
      Prisma.$TemplatePayload<ExtArgs>,
      T,
      "findUniqueOrThrow",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  asset<T extends Prisma.AssetDefaultArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.AssetDefaultArgs<ExtArgs>>
  ): Prisma.Prisma__AssetClient<
    | runtime.Types.Result.GetResult<
        Prisma.$AssetPayload<ExtArgs>,
        T,
        "findUniqueOrThrow",
        GlobalOmitOptions
      >
    | Null,
    Null,
    ExtArgs,
    GlobalOmitOptions
  >;
  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
  ): runtime.Types.Utils.JsPromise<T | TResult>;
  finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GenerationFieldRefs {
  readonly id: Prisma.FieldRef<"Generation", "String">;
  readonly userId: Prisma.FieldRef<"Generation", "String">;
  readonly templateId: Prisma.FieldRef<"Generation", "String">;
  readonly assetId: Prisma.FieldRef<"Generation", "String">;
  readonly status: Prisma.FieldRef<"Generation", "JobStatus">;
  readonly failureReason: Prisma.FieldRef<"Generation", "String">;
  readonly cost: Prisma.FieldRef<"Generation", "Int">;
  readonly providerJobId: Prisma.FieldRef<"Generation", "String">;
  readonly resultUrl: Prisma.FieldRef<"Generation", "String">;
  readonly createdAt: Prisma.FieldRef<"Generation", "DateTime">;
  readonly updatedAt: Prisma.FieldRef<"Generation", "DateTime">;
}
export type GenerationFindUniqueArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where: Prisma.GenerationWhereUniqueInput;
};
export type GenerationFindUniqueOrThrowArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where: Prisma.GenerationWhereUniqueInput;
};
export type GenerationFindFirstArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where?: Prisma.GenerationWhereInput;
  orderBy?: Prisma.GenerationOrderByWithRelationInput | Prisma.GenerationOrderByWithRelationInput[];
  cursor?: Prisma.GenerationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.GenerationScalarFieldEnum | Prisma.GenerationScalarFieldEnum[];
};
export type GenerationFindFirstOrThrowArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where?: Prisma.GenerationWhereInput;
  orderBy?: Prisma.GenerationOrderByWithRelationInput | Prisma.GenerationOrderByWithRelationInput[];
  cursor?: Prisma.GenerationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.GenerationScalarFieldEnum | Prisma.GenerationScalarFieldEnum[];
};
export type GenerationFindManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where?: Prisma.GenerationWhereInput;
  orderBy?: Prisma.GenerationOrderByWithRelationInput | Prisma.GenerationOrderByWithRelationInput[];
  cursor?: Prisma.GenerationWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.GenerationScalarFieldEnum | Prisma.GenerationScalarFieldEnum[];
};
export type GenerationCreateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  data: Prisma.XOR<Prisma.GenerationCreateInput, Prisma.GenerationUncheckedCreateInput>;
};
export type GenerationCreateManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  data: Prisma.GenerationCreateManyInput | Prisma.GenerationCreateManyInput[];
  skipDuplicates?: boolean;
};
export type GenerationCreateManyAndReturnArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelectCreateManyAndReturn<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  data: Prisma.GenerationCreateManyInput | Prisma.GenerationCreateManyInput[];
  skipDuplicates?: boolean;
  include?: Prisma.GenerationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type GenerationUpdateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  data: Prisma.XOR<Prisma.GenerationUpdateInput, Prisma.GenerationUncheckedUpdateInput>;
  where: Prisma.GenerationWhereUniqueInput;
};
export type GenerationUpdateManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  data: Prisma.XOR<
    Prisma.GenerationUpdateManyMutationInput,
    Prisma.GenerationUncheckedUpdateManyInput
  >;
  where?: Prisma.GenerationWhereInput;
  limit?: number;
};
export type GenerationUpdateManyAndReturnArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelectUpdateManyAndReturn<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  data: Prisma.XOR<
    Prisma.GenerationUpdateManyMutationInput,
    Prisma.GenerationUncheckedUpdateManyInput
  >;
  where?: Prisma.GenerationWhereInput;
  limit?: number;
  include?: Prisma.GenerationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type GenerationUpsertArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where: Prisma.GenerationWhereUniqueInput;
  create: Prisma.XOR<Prisma.GenerationCreateInput, Prisma.GenerationUncheckedCreateInput>;
  update: Prisma.XOR<Prisma.GenerationUpdateInput, Prisma.GenerationUncheckedUpdateInput>;
};
export type GenerationDeleteArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
  where: Prisma.GenerationWhereUniqueInput;
};
export type GenerationDeleteManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.GenerationWhereInput;
  limit?: number;
};
export type Generation$templateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.TemplateSelect<ExtArgs> | null;
  omit?: Prisma.TemplateOmit<ExtArgs> | null;
  include?: Prisma.TemplateInclude<ExtArgs> | null;
  where?: Prisma.TemplateWhereInput;
};
export type GenerationDefaultArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.GenerationSelect<ExtArgs> | null;
  omit?: Prisma.GenerationOmit<ExtArgs> | null;
  include?: Prisma.GenerationInclude<ExtArgs> | null;
};
