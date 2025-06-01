import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../d5ee9a47-8484-4824-a609-996298830b51/src/item"
import Script2 from "../94d40c0a-759a-4210-bb23-7a87d9e143f1/src/item"
import Script3 from "../80d9cb1c-2fcf-4585-8e19-e2d5621fd54d/src/item"
import Script4 from "../ab84996d-dcdc-429c-818e-a7640239c803/src/item"
import Script5 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import Script6 from "../7d669c08-c354-45e4-b3a3-c915c8fd6b6e/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const stairsFloating = new Entity('stairsFloating')
engine.addEntity(stairsFloating)
stairsFloating.setParent(_scene)
const transform2 = new Transform({
  position: new Vector3(7.500000476837158, 0.0000019073486328125, 16),
  rotation: new Quaternion(1.1229996696015404e-14, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000040531158447, 1, 1.0000040531158447)
})
stairsFloating.addComponentOrReplace(transform2)
const gltfShape = new GLTFShape("896b942f-3c65-4d53-b8ff-8d874270fe6e/floatingStairs.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
stairsFloating.addComponentOrReplace(gltfShape)

const instagramButtonLink = new Entity('instagramButtonLink')
engine.addEntity(instagramButtonLink)
instagramButtonLink.setParent(_scene)
const transform3 = new Transform({
  position: new Vector3(14, 9.5367431640625e-7, 1),
  rotation: new Quaternion(-1.3141651322712278e-8, 0.881921648979187, -1.1215759343485843e-7, 0.471396267414093),
  scale: new Vector3(2.500009059906006, 3, 5.000018119812012)
})
instagramButtonLink.addComponentOrReplace(transform3)

const galleryInfoWhite = new Entity('galleryInfoWhite')
engine.addEntity(galleryInfoWhite)
galleryInfoWhite.setParent(_scene)
const transform4 = new Transform({
  position: new Vector3(12, 0.0000019073486328125, 14.000001907348633),
  rotation: new Quaternion(-9.385734072266724e-15, -1, 1.1920927533992653e-7, 1.1920928955078125e-7),
  scale: new Vector3(1.0000029802322388, 1, 1.0000029802322388)
})
galleryInfoWhite.addComponentOrReplace(transform4)

const windowFullWall3 = new Entity('windowFullWall3')
engine.addEntity(windowFullWall3)
windowFullWall3.setParent(_scene)
const gltfShape2 = new GLTFShape("7cd98940-78b6-4b61-af5d-da43f3360022/FullWallWindow.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
windowFullWall3.addComponentOrReplace(gltfShape2)
const transform5 = new Transform({
  position: new Vector3(11.5, 4.000001907348633, 16),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(1.912500023841858, 0.6562429070472717, 0.5000028610229492)
})
windowFullWall3.addComponentOrReplace(transform5)

const windowFullWall4 = new Entity('windowFullWall4')
engine.addEntity(windowFullWall4)
windowFullWall4.setParent(_scene)
windowFullWall4.addComponentOrReplace(gltfShape2)
const transform6 = new Transform({
  position: new Vector3(0.5000004768371582, 4.000001907348633, 16),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(3.825000047683716, 0.656242847442627, 0.5000030994415283)
})
windowFullWall4.addComponentOrReplace(transform6)

const stairsFloating7 = new Entity('stairsFloating7')
engine.addEntity(stairsFloating7)
stairsFloating7.setParent(_scene)
stairsFloating7.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(7.500000476837158, 4.000001907348633, 16),
  rotation: new Quaternion(1.1229996696015404e-14, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000052452087402, 1, 1.0000052452087402)
})
stairsFloating7.addComponentOrReplace(transform7)

const windowFullWall5 = new Entity('windowFullWall5')
engine.addEntity(windowFullWall5)
windowFullWall5.setParent(_scene)
windowFullWall5.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(11.5, 8.000001907348633, 16),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(1.912500023841858, 0.656242311000824, 0.5000030994415283)
})
windowFullWall5.addComponentOrReplace(transform8)

const windowFullWall7 = new Entity('windowFullWall7')
engine.addEntity(windowFullWall7)
windowFullWall7.setParent(_scene)
windowFullWall7.addComponentOrReplace(gltfShape2)
const transform9 = new Transform({
  position: new Vector3(0.5000004768371582, 8.000001907348633, 16),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(3.825000047683716, 0.6562421321868896, 0.5000032186508179)
})
windowFullWall7.addComponentOrReplace(transform9)

const stairsFloating2 = new Entity('stairsFloating2')
engine.addEntity(stairsFloating2)
stairsFloating2.setParent(_scene)
stairsFloating2.addComponentOrReplace(gltfShape)
const transform10 = new Transform({
  position: new Vector3(7.500000476837158, 8.000001907348633, 16),
  rotation: new Quaternion(1.1229996696015404e-14, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000054836273193, 1, 1.0000054836273193)
})
stairsFloating2.addComponentOrReplace(transform10)

const windowFullWall9 = new Entity('windowFullWall9')
engine.addEntity(windowFullWall9)
windowFullWall9.setParent(_scene)
windowFullWall9.addComponentOrReplace(gltfShape2)
const transform11 = new Transform({
  position: new Vector3(0.5000004768371582, 12.000001907348633, 16),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(3.825000047683716, 0.6562418937683105, 0.5000033378601074)
})
windowFullWall9.addComponentOrReplace(transform11)

const windowFullWall10 = new Entity('windowFullWall10')
engine.addEntity(windowFullWall10)
windowFullWall10.setParent(_scene)
windowFullWall10.addComponentOrReplace(gltfShape2)
const transform12 = new Transform({
  position: new Vector3(11.5, 12.000001907348633, 15.999999046325684),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(1.912500023841858, 0.6562420725822449, 0.5000032186508179)
})
windowFullWall10.addComponentOrReplace(transform12)

const stairsFloating3 = new Entity('stairsFloating3')
engine.addEntity(stairsFloating3)
stairsFloating3.setParent(_scene)
stairsFloating3.addComponentOrReplace(gltfShape)
const transform13 = new Transform({
  position: new Vector3(7.500000476837158, 12.000001907348633, 15.999998092651367),
  rotation: new Quaternion(1.1229996696015404e-14, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000059604644775, 1, 1.0000059604644775)
})
stairsFloating3.addComponentOrReplace(transform13)

const windowFullWall11 = new Entity('windowFullWall11')
engine.addEntity(windowFullWall11)
windowFullWall11.setParent(_scene)
windowFullWall11.addComponentOrReplace(gltfShape2)
const transform14 = new Transform({
  position: new Vector3(11.5, 16.000001907348633, 15.999998092651367),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(1.912500023841858, 0.6562418341636658, 0.5000033378601074)
})
windowFullWall11.addComponentOrReplace(transform14)

const windowFullWall13 = new Entity('windowFullWall13')
engine.addEntity(windowFullWall13)
windowFullWall13.setParent(_scene)
windowFullWall13.addComponentOrReplace(gltfShape2)
const transform15 = new Transform({
  position: new Vector3(0.5000004768371582, 16.000001907348633, 15.999998092651367),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(3.825000047683716, 0.6562435626983643, 0.500003457069397)
})
windowFullWall13.addComponentOrReplace(transform15)

const stairsFloating5 = new Entity('stairsFloating5')
engine.addEntity(stairsFloating5)
stairsFloating5.setParent(_scene)
stairsFloating5.addComponentOrReplace(gltfShape)
const transform16 = new Transform({
  position: new Vector3(7.500000476837158, 16.000001907348633, 15.999998092651367),
  rotation: new Quaternion(1.1229996696015404e-14, 0.7071068286895752, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1.0000061988830566, 1, 1.0000061988830566)
})
stairsFloating5.addComponentOrReplace(transform16)

const windowFullWall15 = new Entity('windowFullWall15')
engine.addEntity(windowFullWall15)
windowFullWall15.setParent(_scene)
windowFullWall15.addComponentOrReplace(gltfShape2)
const transform17 = new Transform({
  position: new Vector3(11.5, 19.500001907348633, 15.999998092651367),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(1.912500023841858, 0.6562415957450867, 0.500003457069397)
})
windowFullWall15.addComponentOrReplace(transform17)

const nftPictureFrame = new Entity('nftPictureFrame')
engine.addEntity(nftPictureFrame)
nftPictureFrame.setParent(_scene)
const transform18 = new Transform({
  position: new Vector3(11.5, 4.499998092651367, 0.5000004768371582),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame.addComponentOrReplace(transform18)

const nftPictureFrame2 = new Entity('nftPictureFrame2')
engine.addEntity(nftPictureFrame2)
nftPictureFrame2.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(6.999999523162842, 0.4999980926513672, 0.5000019073486328),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame2.addComponentOrReplace(transform19)

const nftPictureFrame3 = new Entity('nftPictureFrame3')
engine.addEntity(nftPictureFrame3)
nftPictureFrame3.setParent(_scene)
const transform20 = new Transform({
  position: new Vector3(2.499999523162842, 0.4999980926513672, 0.500002384185791),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame3.addComponentOrReplace(transform20)

const nftPictureFrame4 = new Entity('nftPictureFrame4')
engine.addEntity(nftPictureFrame4)
nftPictureFrame4.setParent(_scene)
const transform21 = new Transform({
  position: new Vector3(11.5, 0.4999980926513672, 0.5000014305114746),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame4.addComponentOrReplace(transform21)

const nftPictureFrame5 = new Entity('nftPictureFrame5')
engine.addEntity(nftPictureFrame5)
nftPictureFrame5.setParent(_scene)
const transform22 = new Transform({
  position: new Vector3(6.999999523162842, 4.499998092651367, 0.5000009536743164),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame5.addComponentOrReplace(transform22)

const nftPictureFrame6 = new Entity('nftPictureFrame6')
engine.addEntity(nftPictureFrame6)
nftPictureFrame6.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(2.499999523162842, 4.499998092651367, 0.5000014305114746),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame6.addComponentOrReplace(transform23)

const nftPictureFrame8 = new Entity('nftPictureFrame8')
engine.addEntity(nftPictureFrame8)
nftPictureFrame8.setParent(_scene)
const transform24 = new Transform({
  position: new Vector3(6.999999523162842, 8.499998092651367, 0.5),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame8.addComponentOrReplace(transform24)

const nftPictureFrame9 = new Entity('nftPictureFrame9')
engine.addEntity(nftPictureFrame9)
nftPictureFrame9.setParent(_scene)
const transform25 = new Transform({
  position: new Vector3(2.499999523162842, 8.499998092651367, 0.5000004768371582),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame9.addComponentOrReplace(transform25)

const nftPictureFrame10 = new Entity('nftPictureFrame10')
engine.addEntity(nftPictureFrame10)
nftPictureFrame10.setParent(_scene)
const transform26 = new Transform({
  position: new Vector3(2.499999523162842, 12.499998092651367, 0.4999995231628418),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame10.addComponentOrReplace(transform26)

const nftPictureFrame11 = new Entity('nftPictureFrame11')
engine.addEntity(nftPictureFrame11)
nftPictureFrame11.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(6.999999523162842, 12.499998092651367, 0.4999990463256836),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame11.addComponentOrReplace(transform27)

const nftPictureFrame12 = new Entity('nftPictureFrame12')
engine.addEntity(nftPictureFrame12)
nftPictureFrame12.setParent(_scene)
const transform28 = new Transform({
  position: new Vector3(11.5, 12.499998092651367, 0.4999985694885254),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame12.addComponentOrReplace(transform28)

const nftPictureFrame14 = new Entity('nftPictureFrame14')
engine.addEntity(nftPictureFrame14)
nftPictureFrame14.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(15, 4.5, 7.000000476837158),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.0000176429748535, 7, 1.000002145767212)
})
nftPictureFrame14.addComponentOrReplace(transform29)

const nftPictureFrame15 = new Entity('nftPictureFrame15')
engine.addEntity(nftPictureFrame15)
nftPictureFrame15.setParent(_scene)
const transform30 = new Transform({
  position: new Vector3(15, 4.500000953674316, 11.500000953674316),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.0000176429748535, 7, 1.000002145767212)
})
nftPictureFrame15.addComponentOrReplace(transform30)

const nftPictureFrame13 = new Entity('nftPictureFrame13')
engine.addEntity(nftPictureFrame13)
nftPictureFrame13.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(15, 4.499998569488525, 2.500000476837158),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000019550323486, 7, 1.000002384185791)
})
nftPictureFrame13.addComponentOrReplace(transform31)

const nftPictureFrame16 = new Entity('nftPictureFrame16')
engine.addEntity(nftPictureFrame16)
nftPictureFrame16.setParent(_scene)
const transform32 = new Transform({
  position: new Vector3(15, 8.500000953674316, 11.5),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000019550323486, 7, 1.000002384185791)
})
nftPictureFrame16.addComponentOrReplace(transform32)

const nftPictureFrame17 = new Entity('nftPictureFrame17')
engine.addEntity(nftPictureFrame17)
nftPictureFrame17.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(15, 8.5, 7),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000021457672119, 7, 1.0000026226043701)
})
nftPictureFrame17.addComponentOrReplace(transform33)

const nftPictureFrame18 = new Entity('nftPictureFrame18')
engine.addEntity(nftPictureFrame18)
nftPictureFrame18.setParent(_scene)
const transform34 = new Transform({
  position: new Vector3(15, 8.499999046325684, 2.499999523162842),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000023365020752, 7, 1.0000028610229492)
})
nftPictureFrame18.addComponentOrReplace(transform34)

const nftPictureFrame19 = new Entity('nftPictureFrame19')
engine.addEntity(nftPictureFrame19)
nftPictureFrame19.setParent(_scene)
const transform35 = new Transform({
  position: new Vector3(15, 12.499998092651367, 2.4999985694885254),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000025272369385, 7, 1.0000030994415283)
})
nftPictureFrame19.addComponentOrReplace(transform35)

const nftPictureFrame20 = new Entity('nftPictureFrame20')
engine.addEntity(nftPictureFrame20)
nftPictureFrame20.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(15, 12.5, 6.999999046325684),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000027179718018, 7, 1.0000033378601074)
})
nftPictureFrame20.addComponentOrReplace(transform36)

const nftPictureFrame21 = new Entity('nftPictureFrame21')
engine.addEntity(nftPictureFrame21)
nftPictureFrame21.setParent(_scene)
const transform37 = new Transform({
  position: new Vector3(15, 12.500000953674316, 11.499999046325684),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.00002908706665, 7, 1.0000035762786865)
})
nftPictureFrame21.addComponentOrReplace(transform37)

const windowFullWall17 = new Entity('windowFullWall17')
engine.addEntity(windowFullWall17)
windowFullWall17.setParent(_scene)
windowFullWall17.addComponentOrReplace(gltfShape2)
const transform38 = new Transform({
  position: new Vector3(7.500000476837158, 0.0000019073486328125, 14.000001907348633),
  rotation: new Quaternion(-9.829095404256805e-8, -5.795192237201263e-8, -0.70710688829422, 0.7071067690849304),
  scale: new Vector3(9.562535285949707, 0.9843839406967163, 0.5000063180923462)
})
windowFullWall17.addComponentOrReplace(transform38)

const reflectiveDiamondsAnimated = new Entity('reflectiveDiamondsAnimated')
engine.addEntity(reflectiveDiamondsAnimated)
reflectiveDiamondsAnimated.setParent(_scene)
const transform39 = new Transform({
  position: new Vector3(7.499999046325684, 10, 7.5),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(0.75, 0.75, 0.75)
})
reflectiveDiamondsAnimated.addComponentOrReplace(transform39)
const gltfShape3 = new GLTFShape("23f60f0a-9c31-46fb-b4db-fef366c92554/reflective-diamonds-animated-4.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
reflectiveDiamondsAnimated.addComponentOrReplace(gltfShape3)

const roofMetalEdges = new Entity('roofMetalEdges')
engine.addEntity(roofMetalEdges)
roofMetalEdges.setParent(_scene)
const transform40 = new Transform({
  position: new Vector3(11.5, 8, 7.5),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges.addComponentOrReplace(transform40)
const gltfShape4 = new GLTFShape("ca691e0a-064d-44ec-95f5-2a0f751190cd/MetalRoof_2Edges.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
roofMetalEdges.addComponentOrReplace(gltfShape4)

const roofMetalCorner = new Entity('roofMetalCorner')
engine.addEntity(roofMetalCorner)
roofMetalCorner.setParent(_scene)
const transform41 = new Transform({
  position: new Vector3(11.499999046325684, 7.999998092651367, 0),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
roofMetalCorner.addComponentOrReplace(transform41)
const gltfShape5 = new GLTFShape("79a3fa3b-9b3b-40d4-90d1-8c9eac4e20ba/MetalRoof_Corner.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
roofMetalCorner.addComponentOrReplace(gltfShape5)

const roofMetalEdges2 = new Entity('roofMetalEdges2')
engine.addEntity(roofMetalEdges2)
roofMetalEdges2.setParent(_scene)
roofMetalEdges2.addComponentOrReplace(gltfShape4)
const transform42 = new Transform({
  position: new Vector3(11.5, 7.999999046325684, 4),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges2.addComponentOrReplace(transform42)

const roofMetalEdges3 = new Entity('roofMetalEdges3')
engine.addEntity(roofMetalEdges3)
roofMetalEdges3.setParent(_scene)
roofMetalEdges3.addComponentOrReplace(gltfShape4)
const transform43 = new Transform({
  position: new Vector3(0.4999995231628418, 7.999999046325684, 4.000000953674316),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges3.addComponentOrReplace(transform43)

const roofMetalEdges4 = new Entity('roofMetalEdges4')
engine.addEntity(roofMetalEdges4)
roofMetalEdges4.setParent(_scene)
roofMetalEdges4.addComponentOrReplace(gltfShape4)
const transform44 = new Transform({
  position: new Vector3(0.5, 8, 7.500000953674316),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges4.addComponentOrReplace(transform44)

const roofMetalCorner2 = new Entity('roofMetalCorner2')
engine.addEntity(roofMetalCorner2)
roofMetalCorner2.setParent(_scene)
roofMetalCorner2.addComponentOrReplace(gltfShape5)
const transform45 = new Transform({
  position: new Vector3(0.4999985694885254, 7.999999046325684, 4.000000953674316),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000009536743164, 1, 1.0000009536743164)
})
roofMetalCorner2.addComponentOrReplace(transform45)

const roofMetalEdges5 = new Entity('roofMetalEdges5')
engine.addEntity(roofMetalEdges5)
roofMetalEdges5.setParent(_scene)
roofMetalEdges5.addComponentOrReplace(gltfShape4)
const transform46 = new Transform({
  position: new Vector3(4.5, 7.999999046325684, 4.000000953674316),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000017881393433, 1, 0.7500070929527283)
})
roofMetalEdges5.addComponentOrReplace(transform46)

const roofMetalEdges6 = new Entity('roofMetalEdges6')
engine.addEntity(roofMetalEdges6)
roofMetalEdges6.setParent(_scene)
roofMetalEdges6.addComponentOrReplace(gltfShape4)
const transform47 = new Transform({
  position: new Vector3(7, 7.999999046325684, 4.000000476837158),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 0.7500066161155701)
})
roofMetalEdges6.addComponentOrReplace(transform47)

const roofMetalEdges7 = new Entity('roofMetalEdges7')
engine.addEntity(roofMetalEdges7)
roofMetalEdges7.setParent(_scene)
roofMetalEdges7.addComponentOrReplace(gltfShape4)
const transform48 = new Transform({
  position: new Vector3(8.5, 7.999999046325684, 4.000000476837158),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 0.7500072121620178)
})
roofMetalEdges7.addComponentOrReplace(transform48)

const roofMetalEdges8 = new Entity('roofMetalEdges8')
engine.addEntity(roofMetalEdges8)
roofMetalEdges8.setParent(_scene)
roofMetalEdges8.addComponentOrReplace(gltfShape4)
const transform49 = new Transform({
  position: new Vector3(0.5, 12, 7.5),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges8.addComponentOrReplace(transform49)

const roofMetalEdges9 = new Entity('roofMetalEdges9')
engine.addEntity(roofMetalEdges9)
roofMetalEdges9.setParent(_scene)
roofMetalEdges9.addComponentOrReplace(gltfShape4)
const transform50 = new Transform({
  position: new Vector3(0.4999995231628418, 11.999999046325684, 3.999999523162842),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges9.addComponentOrReplace(transform50)

const roofMetalCorner3 = new Entity('roofMetalCorner3')
engine.addEntity(roofMetalCorner3)
roofMetalCorner3.setParent(_scene)
roofMetalCorner3.addComponentOrReplace(gltfShape5)
const transform51 = new Transform({
  position: new Vector3(0.4999985694885254, 11.999999046325684, 3.999999523162842),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
roofMetalCorner3.addComponentOrReplace(transform51)

const roofMetalEdges10 = new Entity('roofMetalEdges10')
engine.addEntity(roofMetalEdges10)
roofMetalEdges10.setParent(_scene)
roofMetalEdges10.addComponentOrReplace(gltfShape4)
const transform52 = new Transform({
  position: new Vector3(4.5, 11.999999046325684, 3.999999523162842),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 0.7500109076499939)
})
roofMetalEdges10.addComponentOrReplace(transform52)

const roofMetalEdges11 = new Entity('roofMetalEdges11')
engine.addEntity(roofMetalEdges11)
roofMetalEdges11.setParent(_scene)
roofMetalEdges11.addComponentOrReplace(gltfShape4)
const transform53 = new Transform({
  position: new Vector3(7, 11.999999046325684, 3.9999990463256836),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 0.7500110268592834)
})
roofMetalEdges11.addComponentOrReplace(transform53)

const roofMetalEdges12 = new Entity('roofMetalEdges12')
engine.addEntity(roofMetalEdges12)
roofMetalEdges12.setParent(_scene)
roofMetalEdges12.addComponentOrReplace(gltfShape4)
const transform54 = new Transform({
  position: new Vector3(8.5, 11.999999046325684, 3.9999990463256836),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 0.750011146068573)
})
roofMetalEdges12.addComponentOrReplace(transform54)

const roofMetalCorner4 = new Entity('roofMetalCorner4')
engine.addEntity(roofMetalCorner4)
roofMetalCorner4.setParent(_scene)
roofMetalCorner4.addComponentOrReplace(gltfShape5)
const transform55 = new Transform({
  position: new Vector3(11.499999046325684, 11.999998092651367, 0),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
roofMetalCorner4.addComponentOrReplace(transform55)

const roofMetalEdges13 = new Entity('roofMetalEdges13')
engine.addEntity(roofMetalEdges13)
roofMetalEdges13.setParent(_scene)
roofMetalEdges13.addComponentOrReplace(gltfShape4)
const transform56 = new Transform({
  position: new Vector3(11.5, 11.999999046325684, 3.9999990463256836),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges13.addComponentOrReplace(transform56)

const roofMetalEdges15 = new Entity('roofMetalEdges15')
engine.addEntity(roofMetalEdges15)
roofMetalEdges15.setParent(_scene)
roofMetalEdges15.addComponentOrReplace(gltfShape4)
const transform57 = new Transform({
  position: new Vector3(0.5, 17.5, 7.499998569488525),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 0.5, 1.5)
})
roofMetalEdges15.addComponentOrReplace(transform57)

const roofMetalEdges16 = new Entity('roofMetalEdges16')
engine.addEntity(roofMetalEdges16)
roofMetalEdges16.setParent(_scene)
roofMetalEdges16.addComponentOrReplace(gltfShape4)
const transform58 = new Transform({
  position: new Vector3(0.4999995231628418, 17.5, 3.9999985694885254),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 0.5, 1.5)
})
roofMetalEdges16.addComponentOrReplace(transform58)

const roofMetalCorner5 = new Entity('roofMetalCorner5')
engine.addEntity(roofMetalCorner5)
roofMetalCorner5.setParent(_scene)
roofMetalCorner5.addComponentOrReplace(gltfShape5)
const transform59 = new Transform({
  position: new Vector3(0.4999985694885254, 17.5, 3.9999985694885254),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.000002145767212, 0.5, 1.000002145767212)
})
roofMetalCorner5.addComponentOrReplace(transform59)

const roofMetalEdges17 = new Entity('roofMetalEdges17')
engine.addEntity(roofMetalEdges17)
roofMetalEdges17.setParent(_scene)
roofMetalEdges17.addComponentOrReplace(gltfShape4)
const transform60 = new Transform({
  position: new Vector3(4.5, 17.5, 3.9999985694885254),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000029802322388, 0.5, 0.7500129342079163)
})
roofMetalEdges17.addComponentOrReplace(transform60)

const roofMetalEdges18 = new Entity('roofMetalEdges18')
engine.addEntity(roofMetalEdges18)
roofMetalEdges18.setParent(_scene)
roofMetalEdges18.addComponentOrReplace(gltfShape4)
const transform61 = new Transform({
  position: new Vector3(7, 17.5, 3.999998092651367),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000032186508179, 0.5, 0.7500130534172058)
})
roofMetalEdges18.addComponentOrReplace(transform61)

const roofMetalCorner6 = new Entity('roofMetalCorner6')
engine.addEntity(roofMetalCorner6)
roofMetalCorner6.setParent(_scene)
roofMetalCorner6.addComponentOrReplace(gltfShape5)
const transform62 = new Transform({
  position: new Vector3(11.499999046325684, 17.499998092651367, 0),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 0.5, 1)
})
roofMetalCorner6.addComponentOrReplace(transform62)

const roofMetalEdges19 = new Entity('roofMetalEdges19')
engine.addEntity(roofMetalEdges19)
roofMetalEdges19.setParent(_scene)
roofMetalEdges19.addComponentOrReplace(gltfShape4)
const transform63 = new Transform({
  position: new Vector3(8.5, 17.5, 3.999998092651367),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.000003457069397, 0.5, 0.7500131726264954)
})
roofMetalEdges19.addComponentOrReplace(transform63)

const roofMetalEdges20 = new Entity('roofMetalEdges20')
engine.addEntity(roofMetalEdges20)
roofMetalEdges20.setParent(_scene)
roofMetalEdges20.addComponentOrReplace(gltfShape4)
const transform64 = new Transform({
  position: new Vector3(11.5, 17.5, 3.999998092651367),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 0.5, 1.5)
})
roofMetalEdges20.addComponentOrReplace(transform64)

const roofMetalEdges21 = new Entity('roofMetalEdges21')
engine.addEntity(roofMetalEdges21)
roofMetalEdges21.setParent(_scene)
roofMetalEdges21.addComponentOrReplace(gltfShape4)
const transform65 = new Transform({
  position: new Vector3(11.5, 17.5, 7.499998092651367),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 0.5, 1.5)
})
roofMetalEdges21.addComponentOrReplace(transform65)

const roofMetalEdges22 = new Entity('roofMetalEdges22')
engine.addEntity(roofMetalEdges22)
roofMetalEdges22.setParent(_scene)
roofMetalEdges22.addComponentOrReplace(gltfShape4)
const transform66 = new Transform({
  position: new Vector3(0.5, 4, 7.500001907348633),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges22.addComponentOrReplace(transform66)

const roofMetalEdges23 = new Entity('roofMetalEdges23')
engine.addEntity(roofMetalEdges23)
roofMetalEdges23.setParent(_scene)
roofMetalEdges23.addComponentOrReplace(gltfShape4)
const transform67 = new Transform({
  position: new Vector3(0.4999995231628418, 3.9999990463256836, 4.000001907348633),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges23.addComponentOrReplace(transform67)

const roofMetalCorner7 = new Entity('roofMetalCorner7')
engine.addEntity(roofMetalCorner7)
roofMetalCorner7.setParent(_scene)
roofMetalCorner7.addComponentOrReplace(gltfShape5)
const transform68 = new Transform({
  position: new Vector3(0.4999985694885254, 3.9999990463256836, 4.000001907348633),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000011920928955, 1, 1.0000011920928955)
})
roofMetalCorner7.addComponentOrReplace(transform68)

const roofMetalEdges24 = new Entity('roofMetalEdges24')
engine.addEntity(roofMetalEdges24)
roofMetalEdges24.setParent(_scene)
roofMetalEdges24.addComponentOrReplace(gltfShape4)
const transform69 = new Transform({
  position: new Vector3(6.999999523162842, 3.9999990463256836, 4.000001430511475),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 0.7500099539756775)
})
roofMetalEdges24.addComponentOrReplace(transform69)

const roofMetalEdges25 = new Entity('roofMetalEdges25')
engine.addEntity(roofMetalEdges25)
roofMetalEdges25.setParent(_scene)
roofMetalEdges25.addComponentOrReplace(gltfShape4)
const transform70 = new Transform({
  position: new Vector3(4.5, 3.9999990463256836, 4.000001907348633),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000020265579224, 1, 0.7500099539756775)
})
roofMetalEdges25.addComponentOrReplace(transform70)

const roofMetalEdges26 = new Entity('roofMetalEdges26')
engine.addEntity(roofMetalEdges26)
roofMetalEdges26.setParent(_scene)
roofMetalEdges26.addComponentOrReplace(gltfShape4)
const transform71 = new Transform({
  position: new Vector3(8.5, 3.9999990463256836, 4.000001430511475),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 0.750010073184967)
})
roofMetalEdges26.addComponentOrReplace(transform71)

const roofMetalEdges27 = new Entity('roofMetalEdges27')
engine.addEntity(roofMetalEdges27)
roofMetalEdges27.setParent(_scene)
roofMetalEdges27.addComponentOrReplace(gltfShape4)
const transform72 = new Transform({
  position: new Vector3(11.5, 3.9999990463256836, 4.000000953674316),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges27.addComponentOrReplace(transform72)

const roofMetalCorner8 = new Entity('roofMetalCorner8')
engine.addEntity(roofMetalCorner8)
roofMetalCorner8.setParent(_scene)
roofMetalCorner8.addComponentOrReplace(gltfShape5)
const transform73 = new Transform({
  position: new Vector3(11.5, 3.999998092651367, 4.76837158203125e-7),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
roofMetalCorner8.addComponentOrReplace(transform73)

const roofMetalEdges28 = new Entity('roofMetalEdges28')
engine.addEntity(roofMetalEdges28)
roofMetalEdges28.setParent(_scene)
roofMetalEdges28.addComponentOrReplace(gltfShape4)
const transform74 = new Transform({
  position: new Vector3(11.5, 4, 7.500000953674316),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges28.addComponentOrReplace(transform74)

const roofMetalEdges29 = new Entity('roofMetalEdges29')
engine.addEntity(roofMetalEdges29)
roofMetalEdges29.setParent(_scene)
roofMetalEdges29.addComponentOrReplace(gltfShape4)
const transform75 = new Transform({
  position: new Vector3(11.5, 0, 7.500001907348633),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges29.addComponentOrReplace(transform75)

const roofMetalEdges30 = new Entity('roofMetalEdges30')
engine.addEntity(roofMetalEdges30)
roofMetalEdges30.setParent(_scene)
roofMetalEdges30.addComponentOrReplace(gltfShape4)
const transform76 = new Transform({
  position: new Vector3(11.5, 0, 4.000001907348633),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges30.addComponentOrReplace(transform76)

const roofMetalEdges31 = new Entity('roofMetalEdges31')
engine.addEntity(roofMetalEdges31)
roofMetalEdges31.setParent(_scene)
roofMetalEdges31.addComponentOrReplace(gltfShape4)
const transform77 = new Transform({
  position: new Vector3(8.5, 0, 4.000002384185791),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000027418136597, 1, 0.7500091195106506)
})
roofMetalEdges31.addComponentOrReplace(transform77)

const roofMetalCorner9 = new Entity('roofMetalCorner9')
engine.addEntity(roofMetalCorner9)
roofMetalCorner9.setParent(_scene)
roofMetalCorner9.addComponentOrReplace(gltfShape5)
const transform78 = new Transform({
  position: new Vector3(11.5, 0, 0.000001430511474609375),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1)
})
roofMetalCorner9.addComponentOrReplace(transform78)

const roofMetalEdges32 = new Entity('roofMetalEdges32')
engine.addEntity(roofMetalEdges32)
roofMetalEdges32.setParent(_scene)
roofMetalEdges32.addComponentOrReplace(gltfShape4)
const transform79 = new Transform({
  position: new Vector3(4.5, 0, 4.000002861022949),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000022649765015, 1, 0.7500084042549133)
})
roofMetalEdges32.addComponentOrReplace(transform79)

const roofMetalCorner10 = new Entity('roofMetalCorner10')
engine.addEntity(roofMetalCorner10)
roofMetalCorner10.setParent(_scene)
roofMetalCorner10.addComponentOrReplace(gltfShape5)
const transform80 = new Transform({
  position: new Vector3(0.4999985694885254, 0, 4.000002861022949),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000014305114746, 1, 1.0000014305114746)
})
roofMetalCorner10.addComponentOrReplace(transform80)

const roofMetalEdges33 = new Entity('roofMetalEdges33')
engine.addEntity(roofMetalEdges33)
roofMetalEdges33.setParent(_scene)
roofMetalEdges33.addComponentOrReplace(gltfShape4)
const transform81 = new Transform({
  position: new Vector3(0.4999995231628418, 0, 4.000002861022949),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges33.addComponentOrReplace(transform81)

const roofMetalEdges34 = new Entity('roofMetalEdges34')
engine.addEntity(roofMetalEdges34)
roofMetalEdges34.setParent(_scene)
roofMetalEdges34.addComponentOrReplace(gltfShape4)
const transform82 = new Transform({
  position: new Vector3(0.5, 0, 7.500002861022949),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges34.addComponentOrReplace(transform82)

const roofMetalEdges35 = new Entity('roofMetalEdges35')
engine.addEntity(roofMetalEdges35)
roofMetalEdges35.setParent(_scene)
roofMetalEdges35.addComponentOrReplace(gltfShape4)
const transform83 = new Transform({
  position: new Vector3(6.999999523162842, 0, 4.000002384185791),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(1.0000025033950806, 1, 0.750008761882782)
})
roofMetalEdges35.addComponentOrReplace(transform83)

const windowFullWall6 = new Entity('windowFullWall6')
engine.addEntity(windowFullWall6)
windowFullWall6.setParent(_scene)
windowFullWall6.addComponentOrReplace(gltfShape2)
const transform84 = new Transform({
  position: new Vector3(0.5000004768371582, 19.500001907348633, 15.999998092651367),
  rotation: new Quaternion(-1.1063546878631314e-7, 0.7071067690849304, -0.70710688829422, -2.6341798076146006e-8),
  scale: new Vector3(3.825000047683716, 0.656241774559021, 0.5000035762786865)
})
windowFullWall6.addComponentOrReplace(transform84)

const nftPictureFrame22 = new Entity('nftPictureFrame22')
engine.addEntity(nftPictureFrame22)
nftPictureFrame22.setParent(_scene)
const transform85 = new Transform({
  position: new Vector3(15, 16, 11.499998092651367),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000030994415283, 7, 1.0000038146972656)
})
nftPictureFrame22.addComponentOrReplace(transform85)

const nftPictureFrame23 = new Entity('nftPictureFrame23')
engine.addEntity(nftPictureFrame23)
nftPictureFrame23.setParent(_scene)
const transform86 = new Transform({
  position: new Vector3(15, 16, 6.999998092651367),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000032901763916, 7, 1.0000040531158447)
})
nftPictureFrame23.addComponentOrReplace(transform86)

const nftPictureFrame24 = new Entity('nftPictureFrame24')
engine.addEntity(nftPictureFrame24)
nftPictureFrame24.setParent(_scene)
const transform87 = new Transform({
  position: new Vector3(15, 15.999998092651367, 2.499997615814209),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000034809112549, 7, 1.0000042915344238)
})
nftPictureFrame24.addComponentOrReplace(transform87)

const nftPictureFrame25 = new Entity('nftPictureFrame25')
engine.addEntity(nftPictureFrame25)
nftPictureFrame25.setParent(_scene)
const transform88 = new Transform({
  position: new Vector3(11.5, 15.999998092651367, 0.499997615814209),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame25.addComponentOrReplace(transform88)

const nftPictureFrame26 = new Entity('nftPictureFrame26')
engine.addEntity(nftPictureFrame26)
nftPictureFrame26.setParent(_scene)
const transform89 = new Transform({
  position: new Vector3(6.999999523162842, 15.999998092651367, 0.4999980926513672),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame26.addComponentOrReplace(transform89)

const nftPictureFrame27 = new Entity('nftPictureFrame27')
engine.addEntity(nftPictureFrame27)
nftPictureFrame27.setParent(_scene)
const transform90 = new Transform({
  position: new Vector3(2.499999523162842, 15.999998092651367, 0.4999985694885254),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame27.addComponentOrReplace(transform90)

const nftPictureFrame29 = new Entity('nftPictureFrame29')
engine.addEntity(nftPictureFrame29)
nftPictureFrame29.setParent(_scene)
const transform91 = new Transform({
  position: new Vector3(15, 0.5, 7.000001430511475),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000021457672119, 7, 1.0000026226043701)
})
nftPictureFrame29.addComponentOrReplace(transform91)

const nftPictureFrame33 = new Entity('nftPictureFrame33')
engine.addEntity(nftPictureFrame33)
nftPictureFrame33.setParent(_scene)
const transform92 = new Transform({
  position: new Vector3(7.999999523162842, 3.499998092651367, 9.5367431640625e-7),
  rotation: new Quaternion(6.921552598378091e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(27.000125885009766, 27, 0.019999932497739792)
})
nftPictureFrame33.addComponentOrReplace(transform92)

const nftPictureFrame31 = new Entity('nftPictureFrame31')
engine.addEntity(nftPictureFrame31)
nftPictureFrame31.setParent(_scene)
const transform93 = new Transform({
  position: new Vector3(15.5, 4, 8),
  rotation: new Quaternion(4.124568491381455e-15, 0.7071067690849304, -8.429371689544496e-8, 0.70710688829422),
  scale: new Vector3(28.00017547607422, 26.25, 1.0000056028366089)
})
nftPictureFrame31.addComponentOrReplace(transform93)

const nftPictureFrame28 = new Entity('nftPictureFrame28')
engine.addEntity(nftPictureFrame28)
nftPictureFrame28.setParent(_scene)
const transform94 = new Transform({
  position: new Vector3(15, 0.5000009536743164, 12.000001907348633),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000025272369385, 7, 1.0000030994415283)
})
nftPictureFrame28.addComponentOrReplace(transform94)

const nftPictureFrame7 = new Entity('nftPictureFrame7')
engine.addEntity(nftPictureFrame7)
nftPictureFrame7.setParent(_scene)
const transform95 = new Transform({
  position: new Vector3(11.5, 8.499998092651367, 0.4999995231628418),
  rotation: new Quaternion(-7.105426934084528e-15, -3.725290298461914e-8, 1.6111190073025972e-14, -1),
  scale: new Vector3(7.000004291534424, 7, 1.0000004768371582)
})
nftPictureFrame7.addComponentOrReplace(transform95)

const roofMetalEdges36 = new Entity('roofMetalEdges36')
engine.addEntity(roofMetalEdges36)
roofMetalEdges36.setParent(_scene)
roofMetalEdges36.addComponentOrReplace(gltfShape4)
const transform96 = new Transform({
  position: new Vector3(11.5, 12, 7.5),
  rotation: new Quaternion(5.83302124049917e-15, 1, -1.1920927533992653e-7, -3.725290298461914e-8),
  scale: new Vector3(1, 1, 1.5)
})
roofMetalEdges36.addComponentOrReplace(transform96)

const plainText2 = new Entity('plainText2')
engine.addEntity(plainText2)
plainText2.setParent(_scene)
const transform97 = new Transform({
  position: new Vector3(0.49999988079071045, 17.5, 7.500002384185791),
  rotation: new Quaternion(4.124569338414402e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000029563903809, 8, 1.5000061988830566)
})
plainText2.addComponentOrReplace(transform97)

const plainText3 = new Entity('plainText3')
engine.addEntity(plainText3)
plainText3.setParent(_scene)
const transform98 = new Transform({
  position: new Vector3(8.5, 17.5, 16),
  rotation: new Quaternion(-2.4643394455332954e-15, 5.960464477539063e-8, -4.521713864745263e-16, 1),
  scale: new Vector3(7.000032424926758, 8, 1.500006914138794)
})
plainText3.addComponentOrReplace(transform98)

const plainText4 = new Entity('plainText4')
engine.addEntity(plainText4)
plainText4.setParent(_scene)
const transform99 = new Transform({
  position: new Vector3(16, 17.5, 7.500003337860107),
  rotation: new Quaternion(-1.2848100675814239e-14, 0.7071067094802856, -8.429366715745346e-8, 0.7071069478988647),
  scale: new Vector3(7.000033378601074, 8, 1.500007152557373)
})
plainText4.addComponentOrReplace(transform99)

const plainText5 = new Entity('plainText5')
engine.addEntity(plainText5)
plainText5.setParent(_scene)
const transform100 = new Transform({
  position: new Vector3(7.999998092651367, 17.499998092651367, 0),
  rotation: new Quaternion(1.3254423227645074e-14, 1, -1.1920928244535389e-7, -9.685754776000977e-8),
  scale: new Vector3(7.000032424926758, 8, 1.500006914138794)
})
plainText5.addComponentOrReplace(transform100)

const windowFullWall2 = new Entity('windowFullWall2')
engine.addEntity(windowFullWall2)
windowFullWall2.setParent(_scene)
const transform101 = new Transform({
  position: new Vector3(0.5, 3.5, 0),
  rotation: new Quaternion(8.817940676788736e-16, -0.7071068286895752, 8.429369557916289e-8, -0.7071068286895752),
  scale: new Vector3(8.00003433227539, 4, 1.0000042915344238)
})
windowFullWall2.addComponentOrReplace(transform101)
windowFullWall2.addComponentOrReplace(gltfShape2)

const wallPlainWhite = new Entity('wallPlainWhite')
engine.addEntity(wallPlainWhite)
wallPlainWhite.setParent(_scene)
const transform102 = new Transform({
  position: new Vector3(15, 0, 16),
  rotation: new Quaternion(-2.4085271740892887e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(8.000021934509277, 5, 0.5000013709068298)
})
wallPlainWhite.addComponentOrReplace(transform102)
const gltfShape6 = new GLTFShape("45eb9e1a-2eca-4b6f-a5c4-b0278dc7e635/PlainWhiteWall.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
wallPlainWhite.addComponentOrReplace(gltfShape6)

const wallPlainWhite2 = new Entity('wallPlainWhite2')
engine.addEntity(wallPlainWhite2)
wallPlainWhite2.setParent(_scene)
wallPlainWhite2.addComponentOrReplace(gltfShape6)
const transform103 = new Transform({
  position: new Vector3(0, 0, 0.0000019073486328125),
  rotation: new Quaternion(-8.019566490101524e-15, -1, 1.1920927533992653e-7, 0),
  scale: new Vector3(8.000020980834961, 5, 0.5000013113021851)
})
wallPlainWhite2.addComponentOrReplace(transform103)

const windowFullWall = new Entity('windowFullWall')
engine.addEntity(windowFullWall)
windowFullWall.setParent(_scene)
windowFullWall.addComponentOrReplace(gltfShape2)
const transform104 = new Transform({
  position: new Vector3(0, 3.5, 16),
  rotation: new Quaternion(-7.410437992676645e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(8.000041961669922, 4, 5.684368991135114e-14)
})
windowFullWall.addComponentOrReplace(transform104)

const windowFullWall8 = new Entity('windowFullWall8')
engine.addEntity(windowFullWall8)
windowFullWall8.setParent(_scene)
windowFullWall8.addComponentOrReplace(gltfShape2)
const transform105 = new Transform({
  position: new Vector3(16, 0.0000019073486328125, 16),
  rotation: new Quaternion(-9.829095404256805e-8, 5.795192237201263e-8, 0.70710688829422, 0.7071067690849304),
  scale: new Vector3(-2.4872188568115234, 3.927699089050293, 0.5000059604644775)
})
windowFullWall8.addComponentOrReplace(transform105)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape7 = new GLTFShape("78300a73-f19a-4e91-bb8a-08a641e29706/FloorBaseWood_01/FloorBaseWood_01.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
entity.addComponentOrReplace(gltfShape7)
const transform106 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform106)

const nftPictureFrame32 = new Entity('nftPictureFrame32')
engine.addEntity(nftPictureFrame32)
nftPictureFrame32.setParent(_scene)
const transform107 = new Transform({
  position: new Vector3(9.5, 0.5, 13.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(7.5, 7.5, 1.875)
})
nftPictureFrame32.addComponentOrReplace(transform107)

const nftPictureFrame30 = new Entity('nftPictureFrame30')
engine.addEntity(nftPictureFrame30)
nftPictureFrame30.setParent(_scene)
const transform108 = new Transform({
  position: new Vector3(15, 0.5, 2.500001907348633),
  rotation: new Quaternion(-2.9808580191865997e-15, 0.7071068286895752, -8.429368136830817e-8, -0.7071068286895752),
  scale: new Vector3(7.000023365020752, 7, 1.0000028610229492)
})
nftPictureFrame30.addComponentOrReplace(transform108)

const nftPictureFrame34 = new Entity('nftPictureFrame34')
engine.addEntity(nftPictureFrame34)
nftPictureFrame34.setParent(_scene)
const transform109 = new Transform({
  position: new Vector3(9.5, 8.5, 13.5),
  rotation: new Quaternion(-5.837277581059123e-15, -1, 1.1920928244535389e-7, 0),
  scale: new Vector3(7.5, 7.5, 1.875)
})
nftPictureFrame34.addComponentOrReplace(transform109)

const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform110 = new Transform({
  position: new Vector3(12.5, 0, 0.9999995231628418),
  rotation: new Quaternion(2.1390872641171167e-15, -0.0980171263217926, 1.1684548439916398e-8, 0.9951847791671753),
  scale: new Vector3(1.9619395732879639, 2, 1.0380604267120361)
})
externalLink.addComponentOrReplace(transform110)

const imageFromURL = new Entity('imageFromURL')
engine.addEntity(imageFromURL)
imageFromURL.setParent(_scene)
const transform111 = new Transform({
  position: new Vector3(9.5, 15.5, 13.5),
  rotation: new Quaternion(-5.884156619524912e-15, 1, -1.1920926823449918e-7, 0),
  scale: new Vector3(3, 3, 3)
})
imageFromURL.addComponentOrReplace(transform111)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
const script2 = new Script2()
const script3 = new Script3()
const script4 = new Script4()
const script5 = new Script5()
const script6 = new Script6()
script1.init(options)
script2.init(options)
script3.init(options)
script4.init(options)
script5.init(options)
script6.init(options)
script1.spawn(instagramButtonLink, {"url":"mirrorvisionwear","bnw":false}, createChannel(channelId, instagramButtonLink, channelBus))
script2.spawn(galleryInfoWhite, {"text":"Mirror Vision Gallery  \npresents \nDoodles Party\n\n\nGallery Inquries:\nwww.JayRosen.design","fontSize":5,"font":"SF","color":"#000000"}, createChannel(channelId, galleryInfoWhite, channelBus))
script3.spawn(nftPictureFrame, {"id":"107201973045891668962180922137488375330693723675077163426312207764762956660746","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame, channelBus))
script3.spawn(nftPictureFrame2, {"id":"107201973045891668962180922137488375330693723675077163426312207765862468288522","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame2, channelBus))
script3.spawn(nftPictureFrame3, {"id":"107201973045891668962180922137488375330693723675077163426312207751568817127434","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame3, channelBus))
script3.spawn(nftPictureFrame4, {"id":"107201973045891668962180922137488375330693723675077163426312207762563933405194","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame4, channelBus))
script3.spawn(nftPictureFrame5, {"id":"107201973045891668962180922137488375330693723675077163426312207749369793871882","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame5, channelBus))
script3.spawn(nftPictureFrame6, {"id":"107201973045891668962180922137488375330693723675077163426312207752668328755210","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame6, channelBus))
script3.spawn(nftPictureFrame8, {"id":"107201973045891668962180922137488375330693723675077163426312207753767840382986","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame8, channelBus))
script3.spawn(nftPictureFrame9, {"id":"107201973045891668962180922137488375330693723675077163426312207661408863649793","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame9, channelBus))
script3.spawn(nftPictureFrame10, {"id":"107201973045891668962180922137488375330693723675077163426312207643816677605377","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame10, channelBus))
script3.spawn(nftPictureFrame11, {"id":"107201973045891668962180922137488375330693723675077163426312207644916189233153","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame11, channelBus))
script3.spawn(nftPictureFrame12, {"id":"107201973045891668962180922137488375330693723675077163426312207642717165977601","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame12, channelBus))
script3.spawn(nftPictureFrame14, {"id":"888","contract":"0x36d30B3b85255473D27dd0F7fD8F35e36a9d6F06","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame14, channelBus))
script3.spawn(nftPictureFrame15, {"id":"107201973045891668962180922137488375330693723675077163426312207761464421777418","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame15, channelBus))
script3.spawn(nftPictureFrame13, {"id":"107201973045891668962180922137488375330693723675077163426312207763663445032970","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame13, channelBus))
script3.spawn(nftPictureFrame16, {"id":"2","contract":"0x5C5e40407c357EEfdBE0a8bc16AEdb08983F9087","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame16, channelBus))
script3.spawn(nftPictureFrame17, {"id":"0","contract":"0x5C5e40407c357EEfdBE0a8bc16AEdb08983F9087","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame17, channelBus))
script3.spawn(nftPictureFrame18, {"id":"3","contract":"0x5C5e40407c357EEfdBE0a8bc16AEdb08983F9087","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame18, channelBus))
script3.spawn(nftPictureFrame19, {"id":"107201973045891668962180922137488375330693723675077163426312207682299584577537","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame19, channelBus))
script3.spawn(nftPictureFrame20, {"id":"107201973045891668962180922137488375330693723675077163426312207695493724110849","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame20, channelBus))
script3.spawn(nftPictureFrame21, {"id":"107201973045891668962180922137488375330693723675077163426312207660309352022017","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame21, channelBus))
script3.spawn(nftPictureFrame22, {"id":"107201973045891668962180922137488375330693723675077163426312207731777607827457","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame22, channelBus))
script3.spawn(nftPictureFrame23, {"id":"107201973045891668962180922137488375330693723675077163426312207713085910155265","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame23, channelBus))
script3.spawn(nftPictureFrame24, {"id":"107201973045891668962180922137488375330693723675077163426312207722981514805249","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame24, channelBus))
script3.spawn(nftPictureFrame25, {"id":"107201973045891668962180922137488375330693723675077163426312207738374677594113","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame25, channelBus))
script3.spawn(nftPictureFrame26, {"id":"107201973045891668962180922137488375330693723675077163426312207707588352016385","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame26, channelBus))
script3.spawn(nftPictureFrame27, {"id":"107201973045891668962180922137488375330693723675077163426312207700991282249729","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame27, channelBus))
script3.spawn(nftPictureFrame29, {"id":"983","contract":"0x0a36f2178c0db2c85471c45334a1dd17d130fd42","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame29, channelBus))
script3.spawn(nftPictureFrame33, {"id":"107201973045891668962180922137488375330693723675077163426312207766961979916289","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame33, channelBus))
script3.spawn(nftPictureFrame31, {"id":"107201973045891668962180922137488375330693723675077163426312207739474189221898","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame31, channelBus))
script3.spawn(nftPictureFrame28, {"id":"1","contract":"0x5C5e40407c357EEfdBE0a8bc16AEdb08983F9087","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame28, channelBus))
script3.spawn(nftPictureFrame7, {"id":"107201973045891668962180922137488375330693723675077163426312207754867352010762","contract":"0x495f947276749Ce646f68AC8c248420045cb7b5e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame7, channelBus))
script4.spawn(plainText2, {"text":"Mirror Vision Gallery","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText2, channelBus))
script4.spawn(plainText3, {"text":"Mirror Vision Gallery","font":"SF","color":"#FFFFFF"}, createChannel(channelId, plainText3, channelBus))
script4.spawn(plainText4, {"text":"Mirror Vision Gallery","font":"SF","color":"#000000"}, createChannel(channelId, plainText4, channelBus))
script4.spawn(plainText5, {"text":"Mirror Vision Gallery","font":"SF","color":"#000000"}, createChannel(channelId, plainText5, channelBus))
script3.spawn(nftPictureFrame32, {"id":"1","contract":"0xc57b5e49dba05efb9b57f4d551a6521590744e50","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame32, channelBus))
script3.spawn(nftPictureFrame30, {"id":"9272","contract":"0xd4d871419714b778ebec2e22c7c53572b573706e","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame30, channelBus))
script3.spawn(nftPictureFrame34, {"id":"3","contract":"0x5C5e40407c357EEfdBE0a8bc16AEdb08983F9087","style":"Classic","color":"#FFFFFF","ui":true}, createChannel(channelId, nftPictureFrame34, channelBus))
script5.spawn(externalLink, {"url":"https://jayrosen.design/","name":"Jay Rosen Design"}, createChannel(channelId, externalLink, channelBus))
script6.spawn(imageFromURL, {"image":"https://i.imgur.com/VOz9xTX.png"}, createChannel(channelId, imageFromURL, channelBus))