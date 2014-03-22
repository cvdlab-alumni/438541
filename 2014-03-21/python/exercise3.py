from pyplasm import *

floor0 = (PROD([QUOTE([40]),QUOTE([40])]))
floor1 = COLOR([0.57,0.77,0.45])(T([3])(9)(floor0))
floor2 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(floor1))
floor3 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(floor2))
floor4 = T([1,2,3])([1.61,2.61,9])(S([1,2])([0.90,0.90])(floor3))
floor5 = T([1,2,3])([1.4,1.4,9])(S([1,2])([0.90,0.90])(floor4))
floor6 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(floor5))
floor7 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(floor5))

plane =(PROD([QUOTE([36]),QUOTE([9])]))
half_circle = MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(PI)(10))
window =(JOIN([half_circle,(MKPOL([[[-1,0],[-1,-1.7],[1,-1.7],[1,0]],[[1,2,3,4]],(None)]))]))

north_w = R([2,3])(PI/2)(PROD([(DIFFERENCE([plane,T([1,2])([18,4.5])(window)])),Q(1)]))
west_w = R([1,2])(PI/2)(north_w)
south_w = T([1,2])([36,36])(R([1,2])(PI/2)(west_w))
east_w = T([1,2])([72,0])(R([1,2])(PI/2)(south_w))

north = R([2,3])(PI/2)(PROD([plane,Q(1)]))
west = R([1,2])(PI/2)(north)
south = T([1,2])([36,36])(R([1,2])(PI/2)(west))
east = T([1,2])([72,0])(R([1,2])(PI/2)(south))

basew = COLOR([0.82,0.75,0.54])(T([1,2])([2,2])(STRUCT([north_w,west_w,south_w,east_w])))
base0 = COLOR([0.82,0.75,0.54])(T([1,2])([2,2])(STRUCT([north,west,south,east])))
base1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(basew))
base2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(base1))
base3 = T([1,2,3])([1.61,1.61,9])(S([1,2])([0.90,0.90])(base2))
base4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(base3))
base5 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base4))

structure = STRUCT([base0,base1,base2,base3,base4,base5])

roof_down = floor1
roof_middle=T([1,2,3])([-1,-1,.75])(S([1,2])([1.05,1.05])(roof_down))
roof_up = T([1,2,3])([0,0,-7.5])(floor2)


roof0 = COLOR([0.57,0.77,0.45])((JOIN([roof_middle,roof_down,roof_up])))
roof1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(roof0))
roof2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(roof1))
roof3 = T([1,2,3])([1.5,1.5,9])(S([1,2])([0.90,0.90])(roof2))
roof4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(roof3))
roof5 = T([1,2,3])([2.1,2.1,9])(S([1,2])([0.90,0.90])(roof4))

roof_circle = T([1,2,3])([20.5,20.5,63])(MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(2*PI)(10)))
roof_top_1 = JOIN([roof5,T([1,2,3])([14.5,14.5,6])(S([1,2])([0.30,0.30])(floor7))])
roof_top_2 = JOIN([T([1,2,3])([14.5,14.5,6])(S([1,2])([0.30,0.30])(floor7)),roof_circle])
roof_sphere = JOIN([T([1,2,3])([20.5,20.5,63])(SPHERE(2)([8,24])),])
roof_sphere2 = JOIN([T([1,2,3])([20.5,20.5,64.3])(SPHERE(2)([8,24])),])
roof_spike = T([1,2,3])([20.5,20.5,64.5])(JOIN([SPHERE(1.8)([8,24]),T(3)(5)(SPHERE(0.3)([8,24]))]))
roof_top_3 = STRUCT([roof_sphere,roof_sphere2,roof_spike])
roof_top=COLOR([0.57,0.77,0.45])(STRUCT([roof_top_1,roof_top_2,roof_top_3]))

basement_plane = PROD([QUOTE([40.5]),QUOTE([40.5])])
basement = COLOR([0.8,0.8,0.8])(PROD([basement_plane,Q(7)]))


roofs = STRUCT([roof0,roof1,roof2,roof3,roof4,roof_top])



building = STRUCT([roofs, structure])
solid_3D_model = STRUCT([basement,T([3])([7])(building)])
VIEW(solid_3D_model)