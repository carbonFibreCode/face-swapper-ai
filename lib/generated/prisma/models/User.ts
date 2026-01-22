import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
  _count: UserCountAggregateOutputType | null;
  _avg: UserAvgAggregateOutputType | null;
  _sum: UserSumAggregateOutputType | null;
  _min: UserMinAggregateOutputType | null;
  _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
  credits: number | null;
};
export type UserSumAggregateOutputType = {
  credits: number | null;
};
export type UserMinAggregateOutputType = {
  id: string | null;
  name: string | null;
  email: string | null;
  emailVerified: boolean | null;
  image: string | null;
  credits: number | null;
  plan: $Enums.SubscriptionPlan | null;
  stripeCustomerId: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
  id: string | null;
  name: string | null;
  email: string | null;
  emailVerified: boolean | null;
  image: string | null;
  credits: number | null;
  plan: $Enums.SubscriptionPlan | null;
  stripeCustomerId: string | null;
  createdAt: Date | null;
  updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
  id: number;
  name: number;
  email: number;
  emailVerified: number;
  image: number;
  credits: number;
  plan: number;
  stripeCustomerId: number;
  createdAt: number;
  updatedAt: number;
  _all: number;
};
export type UserAvgAggregateInputType = {
  credits?: true;
};
export type UserSumAggregateInputType = {
  credits?: true;
};
export type UserMinAggregateInputType = {
  id?: true;
  name?: true;
  email?: true;
  emailVerified?: true;
  image?: true;
  credits?: true;
  plan?: true;
  stripeCustomerId?: true;
  createdAt?: true;
  updatedAt?: true;
};
export type UserMaxAggregateInputType = {
  id?: true;
  name?: true;
  email?: true;
  emailVerified?: true;
  image?: true;
  credits?: true;
  plan?: true;
  stripeCustomerId?: true;
  createdAt?: true;
  updatedAt?: true;
};
export type UserCountAggregateInputType = {
  id?: true;
  name?: true;
  email?: true;
  emailVerified?: true;
  image?: true;
  credits?: true;
  plan?: true;
  stripeCustomerId?: true;
  createdAt?: true;
  updatedAt?: true;
  _all?: true;
};
export type UserAggregateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
  cursor?: Prisma.UserWhereUniqueInput;
  take?: number;
  skip?: number;
  _count?: true | UserCountAggregateInputType;
  _avg?: UserAvgAggregateInputType;
  _sum?: UserSumAggregateInputType;
  _min?: UserMinAggregateInputType;
  _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
  [P in keyof T & keyof AggregateUser]: P extends "_count" | "count"
    ? T[P] extends true
      ? number
      : Prisma.GetScalarType<T[P], AggregateUser[P]>
    : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
  by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
  having?: Prisma.UserScalarWhereWithAggregatesInput;
  take?: number;
  skip?: number;
  _count?: UserCountAggregateInputType | true;
  _avg?: UserAvgAggregateInputType;
  _sum?: UserSumAggregateInputType;
  _min?: UserMinAggregateInputType;
  _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  credits: number;
  plan: $Enums.SubscriptionPlan;
  stripeCustomerId: string | null;
  createdAt: Date;
  updatedAt: Date;
  _count: UserCountAggregateOutputType | null;
  _avg: UserAvgAggregateOutputType | null;
  _sum: UserSumAggregateOutputType | null;
  _min: UserMinAggregateOutputType | null;
  _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
  Array<
    Prisma.PickEnumerable<UserGroupByOutputType, T["by"]> & {
      [P in keyof T & keyof UserGroupByOutputType]: P extends "_count"
        ? T[P] extends boolean
          ? number
          : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>
        : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
    }
  >
>;
export type UserWhereInput = {
  AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
  OR?: Prisma.UserWhereInput[];
  NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
  id?: Prisma.StringFilter<"User"> | string;
  name?: Prisma.StringFilter<"User"> | string;
  email?: Prisma.StringFilter<"User"> | string;
  emailVerified?: Prisma.BoolFilter<"User"> | boolean;
  image?: Prisma.StringNullableFilter<"User"> | string | null;
  credits?: Prisma.IntFilter<"User"> | number;
  plan?: Prisma.EnumSubscriptionPlanFilter<"User"> | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.StringNullableFilter<"User"> | string | null;
  createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
  updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
  assets?: Prisma.AssetListRelationFilter;
  generations?: Prisma.GenerationListRelationFilter;
  sessions?: Prisma.SessionListRelationFilter;
  accounts?: Prisma.AccountListRelationFilter;
};
export type UserOrderByWithRelationInput = {
  id?: Prisma.SortOrder;
  name?: Prisma.SortOrder;
  email?: Prisma.SortOrder;
  emailVerified?: Prisma.SortOrder;
  image?: Prisma.SortOrderInput | Prisma.SortOrder;
  credits?: Prisma.SortOrder;
  plan?: Prisma.SortOrder;
  stripeCustomerId?: Prisma.SortOrderInput | Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
  assets?: Prisma.AssetOrderByRelationAggregateInput;
  generations?: Prisma.GenerationOrderByRelationAggregateInput;
  sessions?: Prisma.SessionOrderByRelationAggregateInput;
  accounts?: Prisma.AccountOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<
  {
    id?: string;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringFilter<"User"> | string;
    emailVerified?: Prisma.BoolFilter<"User"> | boolean;
    image?: Prisma.StringNullableFilter<"User"> | string | null;
    credits?: Prisma.IntFilter<"User"> | number;
    plan?: Prisma.EnumSubscriptionPlanFilter<"User"> | $Enums.SubscriptionPlan;
    stripeCustomerId?: Prisma.StringNullableFilter<"User"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    assets?: Prisma.AssetListRelationFilter;
    generations?: Prisma.GenerationListRelationFilter;
    sessions?: Prisma.SessionListRelationFilter;
    accounts?: Prisma.AccountListRelationFilter;
  },
  "id" | "email"
>;
export type UserOrderByWithAggregationInput = {
  id?: Prisma.SortOrder;
  name?: Prisma.SortOrder;
  email?: Prisma.SortOrder;
  emailVerified?: Prisma.SortOrder;
  image?: Prisma.SortOrderInput | Prisma.SortOrder;
  credits?: Prisma.SortOrder;
  plan?: Prisma.SortOrder;
  stripeCustomerId?: Prisma.SortOrderInput | Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
  _count?: Prisma.UserCountOrderByAggregateInput;
  _avg?: Prisma.UserAvgOrderByAggregateInput;
  _max?: Prisma.UserMaxOrderByAggregateInput;
  _min?: Prisma.UserMinOrderByAggregateInput;
  _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
  AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
  OR?: Prisma.UserScalarWhereWithAggregatesInput[];
  NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
  id?: Prisma.StringWithAggregatesFilter<"User"> | string;
  name?: Prisma.StringWithAggregatesFilter<"User"> | string;
  email?: Prisma.StringWithAggregatesFilter<"User"> | string;
  emailVerified?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
  image?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
  credits?: Prisma.IntWithAggregatesFilter<"User"> | number;
  plan?: Prisma.EnumSubscriptionPlanWithAggregatesFilter<"User"> | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
  createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
  updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetCreateNestedManyWithoutUserInput;
  generations?: Prisma.GenerationCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetUncheckedCreateNestedManyWithoutUserInput;
  generations?: Prisma.GenerationUncheckedCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUpdateManyWithoutUserNestedInput;
  generations?: Prisma.GenerationUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUncheckedUpdateManyWithoutUserNestedInput;
  generations?: Prisma.GenerationUncheckedUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  name?: Prisma.SortOrder;
  email?: Prisma.SortOrder;
  emailVerified?: Prisma.SortOrder;
  image?: Prisma.SortOrder;
  credits?: Prisma.SortOrder;
  plan?: Prisma.SortOrder;
  stripeCustomerId?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
  credits?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  name?: Prisma.SortOrder;
  email?: Prisma.SortOrder;
  emailVerified?: Prisma.SortOrder;
  image?: Prisma.SortOrder;
  credits?: Prisma.SortOrder;
  plan?: Prisma.SortOrder;
  stripeCustomerId?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
  id?: Prisma.SortOrder;
  name?: Prisma.SortOrder;
  email?: Prisma.SortOrder;
  emailVerified?: Prisma.SortOrder;
  image?: Prisma.SortOrder;
  credits?: Prisma.SortOrder;
  plan?: Prisma.SortOrder;
  stripeCustomerId?: Prisma.SortOrder;
  createdAt?: Prisma.SortOrder;
  updatedAt?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
  credits?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
  is?: Prisma.UserWhereInput;
  isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
  set?: string;
};
export type BoolFieldUpdateOperationsInput = {
  set?: boolean;
};
export type NullableStringFieldUpdateOperationsInput = {
  set?: string | null;
};
export type IntFieldUpdateOperationsInput = {
  set?: number;
  increment?: number;
  decrement?: number;
  multiply?: number;
  divide?: number;
};
export type EnumSubscriptionPlanFieldUpdateOperationsInput = {
  set?: $Enums.SubscriptionPlan;
};
export type DateTimeFieldUpdateOperationsInput = {
  set?: Date | string;
};
export type UserCreateNestedOneWithoutSessionsInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutSessionsInput,
    Prisma.UserUncheckedCreateWithoutSessionsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
  connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutSessionsInput,
    Prisma.UserUncheckedCreateWithoutSessionsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutSessionsInput;
  upsert?: Prisma.UserUpsertWithoutSessionsInput;
  connect?: Prisma.UserWhereUniqueInput;
  update?: Prisma.XOR<
    Prisma.XOR<
      Prisma.UserUpdateToOneWithWhereWithoutSessionsInput,
      Prisma.UserUpdateWithoutSessionsInput
    >,
    Prisma.UserUncheckedUpdateWithoutSessionsInput
  >;
};
export type UserCreateNestedOneWithoutAccountsInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutAccountsInput,
    Prisma.UserUncheckedCreateWithoutAccountsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
  connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutAccountsInput,
    Prisma.UserUncheckedCreateWithoutAccountsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAccountsInput;
  upsert?: Prisma.UserUpsertWithoutAccountsInput;
  connect?: Prisma.UserWhereUniqueInput;
  update?: Prisma.XOR<
    Prisma.XOR<
      Prisma.UserUpdateToOneWithWhereWithoutAccountsInput,
      Prisma.UserUpdateWithoutAccountsInput
    >,
    Prisma.UserUncheckedUpdateWithoutAccountsInput
  >;
};
export type UserCreateNestedOneWithoutAssetsInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutAssetsInput,
    Prisma.UserUncheckedCreateWithoutAssetsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssetsInput;
  connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutAssetsNestedInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutAssetsInput,
    Prisma.UserUncheckedCreateWithoutAssetsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutAssetsInput;
  upsert?: Prisma.UserUpsertWithoutAssetsInput;
  connect?: Prisma.UserWhereUniqueInput;
  update?: Prisma.XOR<
    Prisma.XOR<
      Prisma.UserUpdateToOneWithWhereWithoutAssetsInput,
      Prisma.UserUpdateWithoutAssetsInput
    >,
    Prisma.UserUncheckedUpdateWithoutAssetsInput
  >;
};
export type UserCreateNestedOneWithoutGenerationsInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutGenerationsInput,
    Prisma.UserUncheckedCreateWithoutGenerationsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutGenerationsInput;
  connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutGenerationsNestedInput = {
  create?: Prisma.XOR<
    Prisma.UserCreateWithoutGenerationsInput,
    Prisma.UserUncheckedCreateWithoutGenerationsInput
  >;
  connectOrCreate?: Prisma.UserCreateOrConnectWithoutGenerationsInput;
  upsert?: Prisma.UserUpsertWithoutGenerationsInput;
  connect?: Prisma.UserWhereUniqueInput;
  update?: Prisma.XOR<
    Prisma.XOR<
      Prisma.UserUpdateToOneWithWhereWithoutGenerationsInput,
      Prisma.UserUpdateWithoutGenerationsInput
    >,
    Prisma.UserUncheckedUpdateWithoutGenerationsInput
  >;
};
export type UserCreateWithoutSessionsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetCreateNestedManyWithoutUserInput;
  generations?: Prisma.GenerationCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSessionsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetUncheckedCreateNestedManyWithoutUserInput;
  generations?: Prisma.GenerationUncheckedCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSessionsInput = {
  where: Prisma.UserWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutSessionsInput,
    Prisma.UserUncheckedCreateWithoutSessionsInput
  >;
};
export type UserUpsertWithoutSessionsInput = {
  update: Prisma.XOR<
    Prisma.UserUpdateWithoutSessionsInput,
    Prisma.UserUncheckedUpdateWithoutSessionsInput
  >;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutSessionsInput,
    Prisma.UserUncheckedCreateWithoutSessionsInput
  >;
  where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSessionsInput = {
  where?: Prisma.UserWhereInput;
  data: Prisma.XOR<
    Prisma.UserUpdateWithoutSessionsInput,
    Prisma.UserUncheckedUpdateWithoutSessionsInput
  >;
};
export type UserUpdateWithoutSessionsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUpdateManyWithoutUserNestedInput;
  generations?: Prisma.GenerationUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSessionsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUncheckedUpdateManyWithoutUserNestedInput;
  generations?: Prisma.GenerationUncheckedUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAccountsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetCreateNestedManyWithoutUserInput;
  generations?: Prisma.GenerationCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAccountsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetUncheckedCreateNestedManyWithoutUserInput;
  generations?: Prisma.GenerationUncheckedCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAccountsInput = {
  where: Prisma.UserWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutAccountsInput,
    Prisma.UserUncheckedCreateWithoutAccountsInput
  >;
};
export type UserUpsertWithoutAccountsInput = {
  update: Prisma.XOR<
    Prisma.UserUpdateWithoutAccountsInput,
    Prisma.UserUncheckedUpdateWithoutAccountsInput
  >;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutAccountsInput,
    Prisma.UserUncheckedCreateWithoutAccountsInput
  >;
  where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAccountsInput = {
  where?: Prisma.UserWhereInput;
  data: Prisma.XOR<
    Prisma.UserUpdateWithoutAccountsInput,
    Prisma.UserUncheckedUpdateWithoutAccountsInput
  >;
};
export type UserUpdateWithoutAccountsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUpdateManyWithoutUserNestedInput;
  generations?: Prisma.GenerationUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAccountsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUncheckedUpdateManyWithoutUserNestedInput;
  generations?: Prisma.GenerationUncheckedUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutAssetsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  generations?: Prisma.GenerationCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutAssetsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  generations?: Prisma.GenerationUncheckedCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutAssetsInput = {
  where: Prisma.UserWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutAssetsInput,
    Prisma.UserUncheckedCreateWithoutAssetsInput
  >;
};
export type UserUpsertWithoutAssetsInput = {
  update: Prisma.XOR<
    Prisma.UserUpdateWithoutAssetsInput,
    Prisma.UserUncheckedUpdateWithoutAssetsInput
  >;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutAssetsInput,
    Prisma.UserUncheckedCreateWithoutAssetsInput
  >;
  where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutAssetsInput = {
  where?: Prisma.UserWhereInput;
  data: Prisma.XOR<
    Prisma.UserUpdateWithoutAssetsInput,
    Prisma.UserUncheckedUpdateWithoutAssetsInput
  >;
};
export type UserUpdateWithoutAssetsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  generations?: Prisma.GenerationUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutAssetsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  generations?: Prisma.GenerationUncheckedUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutGenerationsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutGenerationsInput = {
  id: string;
  name: string;
  email: string;
  emailVerified?: boolean;
  image?: string | null;
  credits?: number;
  plan?: $Enums.SubscriptionPlan;
  stripeCustomerId?: string | null;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  assets?: Prisma.AssetUncheckedCreateNestedManyWithoutUserInput;
  sessions?: Prisma.SessionUncheckedCreateNestedManyWithoutUserInput;
  accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutGenerationsInput = {
  where: Prisma.UserWhereUniqueInput;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutGenerationsInput,
    Prisma.UserUncheckedCreateWithoutGenerationsInput
  >;
};
export type UserUpsertWithoutGenerationsInput = {
  update: Prisma.XOR<
    Prisma.UserUpdateWithoutGenerationsInput,
    Prisma.UserUncheckedUpdateWithoutGenerationsInput
  >;
  create: Prisma.XOR<
    Prisma.UserCreateWithoutGenerationsInput,
    Prisma.UserUncheckedCreateWithoutGenerationsInput
  >;
  where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutGenerationsInput = {
  where?: Prisma.UserWhereInput;
  data: Prisma.XOR<
    Prisma.UserUpdateWithoutGenerationsInput,
    Prisma.UserUncheckedUpdateWithoutGenerationsInput
  >;
};
export type UserUpdateWithoutGenerationsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutGenerationsInput = {
  id?: Prisma.StringFieldUpdateOperationsInput | string;
  name?: Prisma.StringFieldUpdateOperationsInput | string;
  email?: Prisma.StringFieldUpdateOperationsInput | string;
  emailVerified?: Prisma.BoolFieldUpdateOperationsInput | boolean;
  image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  credits?: Prisma.IntFieldUpdateOperationsInput | number;
  plan?: Prisma.EnumSubscriptionPlanFieldUpdateOperationsInput | $Enums.SubscriptionPlan;
  stripeCustomerId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
  createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
  assets?: Prisma.AssetUncheckedUpdateManyWithoutUserNestedInput;
  sessions?: Prisma.SessionUncheckedUpdateManyWithoutUserNestedInput;
  accounts?: Prisma.AccountUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
  assets: number;
  generations: number;
  sessions: number;
  accounts: number;
};
export type UserCountOutputTypeSelect<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  assets?: boolean | UserCountOutputTypeCountAssetsArgs;
  generations?: boolean | UserCountOutputTypeCountGenerationsArgs;
  sessions?: boolean | UserCountOutputTypeCountSessionsArgs;
  accounts?: boolean | UserCountOutputTypeCountAccountsArgs;
};
export type UserCountOutputTypeDefaultArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountAssetsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.AssetWhereInput;
};
export type UserCountOutputTypeCountGenerationsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.GenerationWhereInput;
};
export type UserCountOutputTypeCountSessionsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.SessionWhereInput;
};
export type UserCountOutputTypeCountAccountsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.AccountWhereInput;
};
export type UserSelect<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    credits?: boolean;
    plan?: boolean;
    stripeCustomerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    assets?: boolean | Prisma.User$assetsArgs<ExtArgs>;
    generations?: boolean | Prisma.User$generationsArgs<ExtArgs>;
    sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
    accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
  },
  ExtArgs["result"]["user"]
>;
export type UserSelectCreateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    credits?: boolean;
    plan?: boolean;
    stripeCustomerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  },
  ExtArgs["result"]["user"]
>;
export type UserSelectUpdateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetSelect<
  {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    emailVerified?: boolean;
    image?: boolean;
    credits?: boolean;
    plan?: boolean;
    stripeCustomerId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
  },
  ExtArgs["result"]["user"]
>;
export type UserSelectScalar = {
  id?: boolean;
  name?: boolean;
  email?: boolean;
  emailVerified?: boolean;
  image?: boolean;
  credits?: boolean;
  plan?: boolean;
  stripeCustomerId?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
};
export type UserOmit<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = runtime.Types.Extensions.GetOmit<
  | "id"
  | "name"
  | "email"
  | "emailVerified"
  | "image"
  | "credits"
  | "plan"
  | "stripeCustomerId"
  | "createdAt"
  | "updatedAt",
  ExtArgs["result"]["user"]
>;
export type UserInclude<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  assets?: boolean | Prisma.User$assetsArgs<ExtArgs>;
  generations?: boolean | Prisma.User$generationsArgs<ExtArgs>;
  sessions?: boolean | Prisma.User$sessionsArgs<ExtArgs>;
  accounts?: boolean | Prisma.User$accountsArgs<ExtArgs>;
  _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {};
export type UserIncludeUpdateManyAndReturn<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {};
export type $UserPayload<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  name: "User";
  objects: {
    assets: Prisma.$AssetPayload<ExtArgs>[];
    generations: Prisma.$GenerationPayload<ExtArgs>[];
    sessions: Prisma.$SessionPayload<ExtArgs>[];
    accounts: Prisma.$AccountPayload<ExtArgs>[];
  };
  scalars: runtime.Types.Extensions.GetPayloadResult<
    {
      id: string;
      name: string;
      email: string;
      emailVerified: boolean;
      image: string | null;
      credits: number;
      plan: $Enums.SubscriptionPlan;
      stripeCustomerId: string | null;
      createdAt: Date;
      updatedAt: Date;
    },
    ExtArgs["result"]["user"]
  >;
  composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> =
  runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = Omit<UserFindManyArgs, "select" | "include" | "distinct" | "omit"> & {
  select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>["model"]["User"]; meta: { name: "User" } };
  findUnique<T extends UserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<
      Prisma.$UserPayload<ExtArgs>,
      T,
      "findUnique",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
    args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<
      Prisma.$UserPayload<ExtArgs>,
      T,
      "findUniqueOrThrow",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  findFirst<T extends UserFindFirstArgs>(
    args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<
      Prisma.$UserPayload<ExtArgs>,
      T,
      "findFirst",
      GlobalOmitOptions
    > | null,
    null,
    ExtArgs,
    GlobalOmitOptions
  >;
  findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
    args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<
      Prisma.$UserPayload<ExtArgs>,
      T,
      "findFirstOrThrow",
      GlobalOmitOptions
    >,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  findMany<T extends UserFindManyArgs>(
    args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>
  >;
  create<T extends UserCreateArgs>(
    args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  createMany<T extends UserCreateManyArgs>(
    args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  createManyAndReturn<T extends UserCreateManyAndReturnArgs>(
    args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$UserPayload<ExtArgs>,
      T,
      "createManyAndReturn",
      GlobalOmitOptions
    >
  >;
  delete<T extends UserDeleteArgs>(
    args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  update<T extends UserUpdateArgs>(
    args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  deleteMany<T extends UserDeleteManyArgs>(
    args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  updateMany<T extends UserUpdateManyArgs>(
    args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
  ): Prisma.PrismaPromise<Prisma.BatchPayload>;
  updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(
    args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    runtime.Types.Result.GetResult<
      Prisma.$UserPayload<ExtArgs>,
      T,
      "updateManyAndReturn",
      GlobalOmitOptions
    >
  >;
  upsert<T extends UserUpsertArgs>(
    args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>
  ): Prisma.Prisma__UserClient<
    runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>,
    never,
    ExtArgs,
    GlobalOmitOptions
  >;
  count<T extends UserCountArgs>(
    args?: Prisma.Subset<T, UserCountArgs>
  ): Prisma.PrismaPromise<
    T extends runtime.Types.Utils.Record<"select", any>
      ? T["select"] extends true
        ? number
        : Prisma.GetScalarType<T["select"], UserCountAggregateOutputType>
      : number
  >;
  aggregate<T extends UserAggregateArgs>(
    args: Prisma.Subset<T, UserAggregateArgs>
  ): Prisma.PrismaPromise<GetUserAggregateType<T>>;
  groupBy<
    T extends UserGroupByArgs,
    HasSelectOrTake extends Prisma.Or<
      Prisma.Extends<"skip", Prisma.Keys<T>>,
      Prisma.Extends<"take", Prisma.Keys<T>>
    >,
    OrderByArg extends Prisma.True extends HasSelectOrTake
      ? { orderBy: UserGroupByArgs["orderBy"] }
      : { orderBy?: UserGroupByArgs["orderBy"] },
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
    args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors
  ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
  readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<
  T,
  Null = never,
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
  GlobalOmitOptions = {},
> extends Prisma.PrismaPromise<T> {
  readonly [Symbol.toStringTag]: "PrismaPromise";
  assets<T extends Prisma.User$assetsArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.User$assetsArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    | runtime.Types.Result.GetResult<
        Prisma.$AssetPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    | Null
  >;
  generations<T extends Prisma.User$generationsArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.User$generationsArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    | runtime.Types.Result.GetResult<
        Prisma.$GenerationPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    | Null
  >;
  sessions<T extends Prisma.User$sessionsArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.User$sessionsArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    | runtime.Types.Result.GetResult<
        Prisma.$SessionPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    | Null
  >;
  accounts<T extends Prisma.User$accountsArgs<ExtArgs> = {}>(
    args?: Prisma.Subset<T, Prisma.User$accountsArgs<ExtArgs>>
  ): Prisma.PrismaPromise<
    | runtime.Types.Result.GetResult<
        Prisma.$AccountPayload<ExtArgs>,
        T,
        "findMany",
        GlobalOmitOptions
      >
    | Null
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
export interface UserFieldRefs {
  readonly id: Prisma.FieldRef<"User", "String">;
  readonly name: Prisma.FieldRef<"User", "String">;
  readonly email: Prisma.FieldRef<"User", "String">;
  readonly emailVerified: Prisma.FieldRef<"User", "Boolean">;
  readonly image: Prisma.FieldRef<"User", "String">;
  readonly credits: Prisma.FieldRef<"User", "Int">;
  readonly plan: Prisma.FieldRef<"User", "SubscriptionPlan">;
  readonly stripeCustomerId: Prisma.FieldRef<"User", "String">;
  readonly createdAt: Prisma.FieldRef<"User", "DateTime">;
  readonly updatedAt: Prisma.FieldRef<"User", "DateTime">;
}
export type UserFindUniqueArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
  cursor?: Prisma.UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
  cursor?: Prisma.UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where?: Prisma.UserWhereInput;
  orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
  cursor?: Prisma.UserWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
  skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
  skipDuplicates?: boolean;
};
export type UserUpdateArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
  where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
  where?: Prisma.UserWhereInput;
  limit?: number;
};
export type UserUpdateManyAndReturnArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
  where?: Prisma.UserWhereInput;
  limit?: number;
};
export type UserUpsertArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where: Prisma.UserWhereUniqueInput;
  create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
  update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
  where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  where?: Prisma.UserWhereInput;
  limit?: number;
};
export type User$assetsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.AssetSelect<ExtArgs> | null;
  omit?: Prisma.AssetOmit<ExtArgs> | null;
  include?: Prisma.AssetInclude<ExtArgs> | null;
  where?: Prisma.AssetWhereInput;
  orderBy?: Prisma.AssetOrderByWithRelationInput | Prisma.AssetOrderByWithRelationInput[];
  cursor?: Prisma.AssetWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.AssetScalarFieldEnum | Prisma.AssetScalarFieldEnum[];
};
export type User$generationsArgs<
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
export type User$sessionsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.SessionSelect<ExtArgs> | null;
  omit?: Prisma.SessionOmit<ExtArgs> | null;
  include?: Prisma.SessionInclude<ExtArgs> | null;
  where?: Prisma.SessionWhereInput;
  orderBy?: Prisma.SessionOrderByWithRelationInput | Prisma.SessionOrderByWithRelationInput[];
  cursor?: Prisma.SessionWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.SessionScalarFieldEnum | Prisma.SessionScalarFieldEnum[];
};
export type User$accountsArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.AccountSelect<ExtArgs> | null;
  omit?: Prisma.AccountOmit<ExtArgs> | null;
  include?: Prisma.AccountInclude<ExtArgs> | null;
  where?: Prisma.AccountWhereInput;
  orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
  cursor?: Prisma.AccountWhereUniqueInput;
  take?: number;
  skip?: number;
  distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type UserDefaultArgs<
  ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs,
> = {
  select?: Prisma.UserSelect<ExtArgs> | null;
  omit?: Prisma.UserOmit<ExtArgs> | null;
  include?: Prisma.UserInclude<ExtArgs> | null;
};
