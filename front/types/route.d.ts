declare interface RouteMetaData {
path: string;
element: React.ReactNode;
type: "public" | "protected" | "auth";
breadcrumb?: string;
description?: string;
}