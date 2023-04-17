import type { Map, Layer, Expression, ExpressionName } from "mapbox-gl";

export type { Map, Layer, Expression, ExpressionName };

export type LayerOptions = {
  collapsed?: boolean;
  toggler?: boolean;
  attributes?: string[];
  highlight?: boolean;
  container?: HTMLElement; //Jin add.指定容器。如果为空则为默认创建，反之，加载到指定的容器。如果container不为空，则外部需手动调用onAdd,而不是用map.addControl
  labelPrefix?: string | string[]; //Jin add.图例名前缀，如果指定，则在图例显示时会将前缀删除掉.
  onToggle?: (layer: string, visibility: boolean) => void;
};

export type LegendControlOptions = {
  layers?: string[] | Record<string, boolean | string[] | LayerOptions>;
} & LayerOptions;

export type ParsedExpression<In, Out> = {
  name: ExpressionName;
  getter: Expression | undefined;
  stops: [In, Out][];
  inputs: In[];
  outputs: Out[];
  min: number;
  max: number;
};
