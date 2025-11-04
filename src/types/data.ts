// region Nullable Types
export type Nullable<T> = T | null;
export type NullString = Nullable<string>;
export type NullNumber = Nullable<number>;
export type NullBoolean = Nullable<boolean>;
export type NullDate = Nullable<Date>;
export type NullObject = Nullable<Record<string, unknown>>;
// endregion

// region Optional Types
export type Optional<T> = T | undefined;
export type OptionalString = Optional<string>;
export type OptionalNumber = Optional<number>;
export type OptionalBoolean = Optional<boolean>;
export type OptionalDate = Optional<Date>;
export type OptionalObject = Optional<Record<string, unknown>>;
// endregion

// region Maybe Types (both nullable and optional)
export type Maybe<T> = T | null | undefined;
export type MaybeString = Maybe<string>;
export type MaybeNumber = Maybe<number>;
export type MaybeBoolean = Maybe<boolean>;
export type MaybeDate = Maybe<Date>;
export type MaybeObject = Maybe<Record<string, unknown>>;
// endregion

// region Safe Types
export type SafeValue =
  | NullString
  | NullNumber
  | NullBoolean
  | NullDate
  | NullObject;

export type SafeObject = Record<string, SafeValue>;
// endregion

// region Converter Types
export type RawDataConverter<T, U> = (data: T) => U;
export type DataConverter<T> = RawDataConverter<unknown, T>;
// endregion

// region Branded Types (Nominal Typing)
declare const brand: unique symbol;

export type Brand<T, TBrand extends string> = T & {
  readonly [brand]: TBrand;
};

export type UUID = Brand<string, 'UUID'>;
export type Email = Brand<string, 'Email'>;
export type UserId = Brand<number, 'UserId'>;
// endregion

// region Result Types (Error Handling)
export type Result<T, E = Error> =
  | { success: true; value: T }
  | { success: false; error: E };

export type AsyncResult<T, E = Error> = Promise<Result<T, E>>;
// endregion
