from pyplasm import *
import exercise1

floors = exercise1.two_and_half_model

plane =(PROD([QUOTE([36]),QUOTE([9])]))
half_circle = MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(PI)(10))
window =(JOIN([half_circle,(MKPOL([[[-1,0],[-1,-1.7],[1,-1.7],[1,0]],[[1,2,3,4]],(None)]))]))

north = R([2,3])(PI/2)(DIFFERENCE([plane,T([1,2])([18,4.5])(window)]))
west = R([1,2])(PI/2)(north)
south = T([1,2])([36,36])(R([1,2])(PI/2)(west))
east = T([1,2])([72,0])(R([1,2])(PI/2)(south))

base0 = COLOR([0.82,0.75,0.54])(T([1,2])([2,2])(STRUCT([north,west,south,east])))
base1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base0))
base2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(base1))
base3 = T([1,2,3])([1.61,1.61,9])(S([1,2])([0.90,0.90])(base2))
base4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(base3))
base5 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base4))


mock_up_3D = (STRUCT([base0,base1,base2,base3,base4,base5,floors]))
VIEW(mock_up_3D)


