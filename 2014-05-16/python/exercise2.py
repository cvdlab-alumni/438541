from exercise1 import *
from specular import specular_apartment

def dom(n):
 	return INTERVALS(1)(n)

basic_apartment = apartment


main_apartment = STRUCT(MKPOLS(basic_apartment))

floor0 = STRUCT([specular_apartment,main_apartment])
floor1 = T(2)(3.6)(floor0)
floor2 = T(2)(3.6)(floor1)
floor3 = T(2)(3.6)(floor2)
floor4 = T(2)(3.6)(floor3)

apartment_floors = STRUCT([floor0,floor1,floor2,floor3,floor4])
VIEW(apartment_floors)

VV,EV,FV,CV = gridSkeletons([2,1,3])
bezier_block = assemblyDiagramInit([2,1,3])([[1,1],[.4],[.5,2,.5]])
V,CV = bezier_block
#hpc = SKEL_1(STRUCT(MKPOLS(bezier_block)))
#hpc = cellNumbering ((V,VV),hpc)(range(len(VV)),RED,.4)
#VIEW(hpc)



bezier_curve1 = [[1, 0, 0], [1, 0, 0.5],[0, 0, 0.5],[0, 0, 2.5],[1, 0, 2.5],[1, 0, 3.0]]
bezier_curve2 = [[1.4, 0, 0], [1.4, 0, 0.5],[.4, 0, 0.5],[.4, 0, 2.5],[1.4, 0, 2.5],[1.4, 0, 3.0]]
bezier_section = larBezier(S2)([larBezier(S1)(bezier_curve1),larBezier(S1)(bezier_curve2)])
bezier_curve11 = [[1, 3, 0], [1, 3, 0.5],[0, 3, 0.5],[0, 3, 2.5],[1, 3, 2.5],[1, 3, 3.0]]
bezier_curve21 = [[1.4, 3, 0], [1.4, 3, 0.5],[.4, 3, 0.5],[.4, 3, 2.5],[1.4, 3, 2.5],[1.4, 3, 3.0]]
bezier_section1 = larBezier(S2)([larBezier(S1)(bezier_curve11),larBezier(S1)(bezier_curve21)])

bezier2_curve1 = [[1, .5, 1],[0, .5, 1],[0, .5, 2],[1, .6, 2]]
bezier2_curve2 = [[1.6, .5, 1],[.6, .5, 1],[.6, .5, 2],[1.6, .6, 2]]
bezier2_section = larBezier(S2)([larBezier(S1)(bezier2_curve1),larBezier(S1)(bezier2_curve2)])
bezier2_curve11 = [[1, 2.6, 1],[0, 2.6, 1],[0, 2.6, 2],[1, 2.6, 2]]
bezier2_curve21 = [[1.6, 2.6, 1],[.6, 2.6, 1],[.6, 2.6, 2],[1.6, 2.6, 2]]
bezier2_section1 = larBezier(S2)([larBezier(S1)(bezier2_curve11),larBezier(S1)(bezier2_curve21)])

front_bezier = larBezier(S3)([bezier_section,bezier_section1])
front2_bezier = larBezier(S3)([bezier2_section,bezier2_section1])
dom3D = PROD([PROD(AA(dom)([24, 1])),dom(1)])

front_bezier = MAP(front_bezier)(dom3D)
front2_bezier = T([2,3])([0,0])(MAP(front2_bezier)(dom3D))

bezier3_curve1 = [[1, 0, 0], [1, 0, 0.5],[0, 0, 0.5],[0, 0, 2.5],[1, 0, 2.5],[1, 0, 3.0]]
bezier3_curve2 = [[1.8, 0, 0], [1.8, 0, 3.0]]
bezier3_section = larBezier(S2)([larBezier(S1)(bezier3_curve1),larBezier(S1)(bezier3_curve2)])
bezier3_curve11 = [[1, .3, 0], [1, .3, 0.5],[0, .3, 0.5],[0, .3, 2.5],[1, .3, 2.5],[1, .3, 3.0]]
bezier3_curve21 = [[1.8, .3, 0],[1.8, .3, 3.0]]
bezier3_section1 = larBezier(S2)([larBezier(S1)(bezier3_curve11),larBezier(S1)(bezier3_curve21)])
front3_bezier = MAP(larBezier(S3)([bezier3_section,bezier3_section1]))(dom3D)

bezier_final = STRUCT([DIFFERENCE([front_bezier,front2_bezier]),front3_bezier])

bezier0 = T([1,2,3])([13.3,2.9,-1.6])(R([1,3])(PI)(bezier_final))
bezier1 = T(3)(3)(bezier0)
bezier2 = T(3)(3)(bezier1)

bezier_structs = STRUCT([bezier0,bezier1,bezier2])
bezier_structs = STRUCT([bezier_structs,STRUCT(NN(3)([T(2)(3.6),bezier_structs]))])

stair_block = STRUCT(MKPOLS(assemblyDiagramInit([1,1,1])([[.3],[.2,],[1.2]])))
stair = (STRUCT(NN(15)([T([1,2])([.3,.2]),stair_block])))
stair2 = T(2)(2.8)(R([1,3])(PI)((STRUCT(NN(4)([T([1,2])([.3,.2]),stair_block])))))
stair = STRUCT([stair,STRUCT(NN(3)([T(2)(3.6),stair]))])
stair2 = STRUCT([STRUCT(NN(3)([T(2)(3.6),stair2])),stair2])

structure = (STRUCT([(apartment_floors),bezier_structs,T([1,3])([7,-4.2])(stair),T([1,3])([12.2,4.2])(stair2)]))

hor_fix_block = STRUCT(MKPOLS(assemblyDiagramInit([1,1,1])([[1.6],[17.8],[.4]])))

structure = STRUCT([structure,T([1,3])([10.5,4])(hor_fix_block),T([1,3])([10.5,-4.6])(hor_fix_block)])

bezier_curve1 = [[1, 0, 0], [1, 0, 0.5],[0, 0, 0.5],[0, 0, 2.5],[1, 0, 2.5],[1, 0, 3.0]]
bezier_curve2 = [[1.4, 0, 0], [1.4, 0, 0.5],[.4, 0, 0.5],[.4, 0, 2.5],[1.4, 0, 2.5],[1.4, 0, 3.0]]
bezier_section = larBezier(S2)([larBezier(S1)(bezier_curve1),larBezier(S1)(bezier_curve2)])
bezier_curve11 = [[1, .6, 0], [1, .6, 0.5],[0, .6, 0.5],[0, .6, 2.5],[1, .6, 2.5],[1, .6, 3.0]]
bezier_curve21 = [[1.4, .6, 0], [1.4, .6, 0.5],[.4, .6, 0.5],[.4, .6, 2.5],[1.4, .6, 2.5],[1.4, .6, 3.0]]
bezier_section1 = larBezier(S2)([larBezier(S1)(bezier_curve11),larBezier(S1)(bezier_curve21)])

front_bezier = larBezier(S3)([bezier_section,bezier_section1])
front_bezier = MAP(front_bezier)(dom3D)

bezier0 = T([1,2,3])([13.3,0,-1.6])(R([1,3])(PI)(front_bezier))
bezier1 = T(3)(3)(bezier0)
bezier2 = T(3)(3)(bezier1)

bezier_final = T(1)(0)(STRUCT([bezier0,bezier1,bezier2]))
bezier_final = T(2)(2.3)(STRUCT(NN(3)([T(2)(3.6),bezier_final])))

structure = STRUCT([structure,bezier_final])

#VIEW(structure)

bezier_curve1 = [[1, 0, 0], [1, 0, 0.5],[0, 0, 0.5],[0, 0, 2.5],[1, 0, 2.5],[1, 0, 3.0]]
bezier_curve2 = [[1.4, 0, 0], [1.4, 0, 0.5],[.4, 0, 0.5],[.4, 0, 2.5],[1.4, 0, 2.5],[1.4, 0, 3.0]]
bezier_section = larBezier(S2)([larBezier(S1)(bezier_curve1),larBezier(S1)(bezier_curve2)])
bezier_curve11 = [[1, 1.3, 0], [1, 1.3, 0.5],[0, 1.3, 0.5],[0, 1.3, 2.5],[1, 1.3, 2.5],[1, 1.3, 3.0]]
bezier_curve21 = [[1.4, 1.3, 0], [1.4, 1.3, 0.5],[.4, 1.3, 0.5],[.4, 1.3, 2.5],[1.4, 1.3, 2.5],[1.4, 1.3, 3.0]]
bezier_section1 = larBezier(S2)([larBezier(S1)(bezier_curve11),larBezier(S1)(bezier_curve21)])

front_bezier = larBezier(S3)([bezier_section,bezier_section1])
front_bezier = MAP(front_bezier)(dom3D)

bezier3_curve1 = [[1, 0, 0], [1, 0, 0.5],[0, 0, 0.5],[0, 0, 2.5],[1, 0, 2.5],[1, 0, 3.0]]
bezier3_curve2 = [[3.3, 0, 0], [3.3, 0, 3.0]]
bezier3_section = larBezier(S2)([larBezier(S1)(bezier3_curve1),larBezier(S1)(bezier3_curve2)])
bezier3_curve11 = [[1, .3, 0], [1, .3, 0.5],[0, .3, 0.5],[0, .3, 2.5],[1, .3, 2.5],[1, .3, 3.0]]
bezier3_curve21 = [[3.3, .3, 0],[3.3, .3, 3.0]]
bezier3_section1 = larBezier(S2)([larBezier(S1)(bezier3_curve11),larBezier(S1)(bezier3_curve21)])
front3_bezier = MAP(larBezier(S3)([bezier3_section,bezier3_section1]))(dom3D)

front_bezier =STRUCT([front_bezier,T(2)(1)(front3_bezier)])
bezier0 = T([1,2,3])([13.3,0,-1.6])(R([1,3])(PI)(front_bezier))
bezier1 = T(3)(3)(bezier0)
bezier2 = T(3)(3)(bezier1)

top_bezier = STRUCT([bezier0,bezier1,bezier2])
structure = STRUCT([structure,T(2)(16.5)(top_bezier)])

rooftop = assemblyDiagramInit([1,1,1])([[10],[.4],[23.4]])
rooftop = STRUCT(MKPOLS(rooftop))

structure = STRUCT([structure,T([1,2,3])([.4,17.4,-11.6])(rooftop)])

floors = STRUCT(MKPOLS(assemblyDiagramInit([1,1,1])([[10.8],[.3],[7.3]])))
floors = STRUCT(NN(4)([T(2)(3.6),floors]))

structure = (STRUCT([structure,T([1,2,3])([0,-.3,4.5])(floors),T([1,2,3])([0,-.3,-11.8])(floors)]))

floors = STRUCT(MKPOLS(assemblyDiagramInit([1,1,1])([[5],[.3],[9]])))
floors = STRUCT(NN(4)([T(2)(3.6),floors]))

structure = STRUCT([structure,T([1,2,3])([0,-0.3,-4.5])(floors)])

#VIEW(structure)


atrium = assemblyDiagramInit([1,1,1])([[.7],[3],[8.5]])
atrium = STRUCT(MKPOLS(atrium))
door = STRUCT(MKPOLS(assemblyDiagramInit([1,1,1])([[.7],[2],[1]])))
atrium = DIFFERENCE([atrium,T(3)(3.5)(door)])
structure = STRUCT([T([1,2,3])([10.8,0,-4.5])(atrium),structure])


"Building solid form"

#VIEW(structure)