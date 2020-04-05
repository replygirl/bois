type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never }
type XOR<T, U> =
  (T | U) extends object
    ? (Without<T, U> & U) | (Without<U, T> & T)
    : T | U

type Nameable<T> = T & { name?: string }
type Named<T> = T & { name: string }

interface BaseAnchorLinkable { href: string }
export type AnchorLinkable = Nameable<BaseAnchorLinkable>
export type NamedAnchorLinkable = Named<BaseAnchorLinkable>

interface BaseRouterLinkable { to: string }
export type RouterLinkable = Nameable<BaseRouterLinkable>
export type NamedRouterLinkable = Named<BaseRouterLinkable>

type BaseLinkable = XOR<BaseAnchorLinkable, BaseRouterLinkable>
export type Linkable = Nameable<BaseLinkable>
export type NamedLinkable = Named<BaseLinkable>
