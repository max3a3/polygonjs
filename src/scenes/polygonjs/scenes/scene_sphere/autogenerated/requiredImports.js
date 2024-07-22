// cop
import { EnvMapCopNode } from "@polygonjs/src/engine/nodes/cop/EnvMap";
import { ImageCopNode } from "@polygonjs/src/engine/nodes/cop/Image";
import { ImageEXRCopNode } from "@polygonjs/src/engine/nodes/cop/ImageEXR";
// event
import { CameraOrbitControlsEventNode } from "@polygonjs/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshBasicMatNode } from "@polygonjs/src/engine/nodes/mat/MeshBasic";
import { MeshMatcapMatNode } from "@polygonjs/src/engine/nodes/mat/MeshMatcap";
import { MeshStandardMatNode } from "@polygonjs/src/engine/nodes/mat/MeshStandard";
import { MeshStandardBuilderMatNode } from "@polygonjs/src/engine/nodes/mat/MeshStandardBuilder";
// obj
import { CopNetworkObjNode } from "@polygonjs/src/engine/nodes/obj/CopNetwork";
import { GeoObjNode } from "@polygonjs/src/engine/nodes/obj/Geo";
// sop
import { BoxSopNode } from "@polygonjs/src/engine/nodes/sop/Box";
import { CameraControlsSopNode } from "@polygonjs/src/engine/nodes/sop/CameraControls";
import { CopySopNode } from "@polygonjs/src/engine/nodes/sop/Copy";
import { HemisphereLightSopNode } from "@polygonjs/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/src/engine/nodes/sop/PolarTransform";
import { ScatterSopNode } from "@polygonjs/src/engine/nodes/sop/Scatter";
import { SphereSopNode } from "@polygonjs/src/engine/nodes/sop/Sphere";
import { SpotLightSopNode } from "@polygonjs/src/engine/nodes/sop/SpotLight";

export const requiredImports_scene_sphere = {
  nodes: [
    EnvMapCopNode,
    ImageCopNode,
    ImageEXRCopNode,
    CameraOrbitControlsEventNode,
    MeshBasicMatNode,
    MeshMatcapMatNode,
    MeshStandardMatNode,
    MeshStandardBuilderMatNode,
    CopNetworkObjNode,
    GeoObjNode,
    BoxSopNode,
    CameraControlsSopNode,
    CopySopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    ScatterSopNode,
    SphereSopNode,
    SpotLightSopNode,
  ],
  operations: [],
  jsFunctions: [],
};
