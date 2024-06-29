// event
import { CameraOrbitControlsEventNode } from "@polygonjs/src/engine/nodes/event/CameraOrbitControls";
// mat
import { MeshStandardMatNode } from "@polygonjs/src/engine/nodes/mat/MeshStandard";
// obj
import { GeoObjNode } from "@polygonjs/src/engine/nodes/obj/Geo";
// sop
import { ActorSopNode } from "@polygonjs/src/engine/nodes/sop/Actor";
import { CameraControlsSopNode } from "@polygonjs/src/engine/nodes/sop/CameraControls";
import { HemisphereLightSopNode } from "@polygonjs/src/engine/nodes/sop/HemisphereLight";
import { MaterialSopNode } from "@polygonjs/src/engine/nodes/sop/Material";
import { MaterialsNetworkSopNode } from "@polygonjs/src/engine/nodes/sop/MaterialsNetwork";
import { MergeSopNode } from "@polygonjs/src/engine/nodes/sop/Merge";
import { PerspectiveCameraSopNode } from "@polygonjs/src/engine/nodes/sop/PerspectiveCamera";
import { PolarTransformSopNode } from "@polygonjs/src/engine/nodes/sop/PolarTransform";
import { SpotLightSopNode } from "@polygonjs/src/engine/nodes/sop/SpotLight";
import { TorusKnotSopNode } from "@polygonjs/src/engine/nodes/sop/TorusKnot";

// named functions
import { eulerSetFromVector3 } from "@polygonjs/src/engine/functions/eulerSetFromVector3";
import { floatToVec3 } from "@polygonjs/src/engine/functions/floatToVec3";
import { globalsTime } from "@polygonjs/src/engine/functions/globalsTime";
import { globalsTimeDelta } from "@polygonjs/src/engine/functions/globalsTimeDelta";
import { setObjectRotation } from "@polygonjs/src/engine/functions/setObjectRotation";

export const requiredImports_torus_knot = {
  nodes: [
    CameraOrbitControlsEventNode,
    MeshStandardMatNode,
    GeoObjNode,
    ActorSopNode,
    CameraControlsSopNode,
    HemisphereLightSopNode,
    MaterialSopNode,
    MaterialsNetworkSopNode,
    MergeSopNode,
    PerspectiveCameraSopNode,
    PolarTransformSopNode,
    SpotLightSopNode,
    TorusKnotSopNode,
  ],
  operations: [],
  jsFunctions: [
    eulerSetFromVector3,
    floatToVec3,
    globalsTime,
    globalsTimeDelta,
    setObjectRotation,
  ],
};
