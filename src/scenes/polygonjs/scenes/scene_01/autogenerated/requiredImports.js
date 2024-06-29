// cop
import { EnvMapCopNode } from "@polygonjs/src/engine/nodes/cop/EnvMap";
import { ImageCopNode } from "@polygonjs/src/engine/nodes/cop/Image";
import { ImageEXRCopNode } from "@polygonjs/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/src/engine/nodes/mat/MeshStandard";
import { MeshStandardBuilderMatNode } from "@polygonjs/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/src/engine/nodes/obj/Geo";
// sop
import { BoxSopNode } from "@polygonjs/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/src/engine/nodes/sop/CameraControls";
import { HemisphereLightSopNode } from "@polygonjs/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/src/engine/nodes/sop/PerspectiveCamera";
import { PlaneSopNode } from "@polygonjs/src/engine/nodes/sop/Plane";
import { PolarTransformSopNode } from "@polygonjs/src/engine/nodes/sop/PolarTransform";
import { SphereSopNode } from "@polygonjs/src/engine/nodes/sop/Sphere";
import { SpotLightSopNode } from "@polygonjs/src/engine/nodes/sop/SpotLight";
import { TransformSopNode } from "@polygonjs/src/engine/nodes/sop/Transform";

export const requiredImports_scene_01 = {
  nodes: [
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    BoxSopNode,
    CameraControlsSopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PlaneSopNode,
    PolarTransformSopNode,
    SphereSopNode,
    SpotLightSopNode,
    TransformSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
