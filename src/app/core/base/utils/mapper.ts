export abstract class Mapper<I, O> {
  public abstract mapFrom(param: I): O;
  public abstract mapTo(param: O): I;
  public abstract mapFromList(param: I[]): O[];
  public abstract mapToList(param: O[]): I[];
}
