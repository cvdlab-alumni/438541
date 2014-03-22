from pyplasm import *

#creation of all the floors of the pagoda, S and T functions applied
floor0 = (PROD([QUOTE([40]),QUOTE([40])]))
floor1 = COLOR([0.61,0.56,0.22])(T([3])(9)(floor0))
floor2 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(floor1))
floor3 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(floor2))
floor4 = T([1,2,3])([1.61,2.61,9])(S([1,2])([0.90,0.90])(floor3))
floor5 = T([1,2,3])([1.4,1.4,9])(S([1,2])([0.90,0.90])(floor4))
floor6 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(floor5))
floor7 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(floor5))



#assembling the floors
two_and_half_model = STRUCT([COLOR([0.54,0.54,0.54])(floor0),floor1,floor2,floor3,floor4,floor5,floor6])


plane =(PROD([QUOTE([36]),QUOTE([9])]))
half_circle = MAP(lambda x: [COS(x[0]),SIN(x[0])])(INTERVALS(PI)(10))
window =(JOIN([half_circle,(MKPOL([[[-1,0],[-1,-1.7],[1,-1.7],[1,0]],[[1,2,3,4]],(None)]))]))

north_w = R([2,3])(PI/2)(DIFFERENCE([plane,T([1,2])([18,1.6])(window)]))
west_w = R([1,2])(PI/2)(north_w)
south_w = T([1,2])([36,36])(R([1,2])(PI/2)(west_w))
east_w = T([1,2])([72,0])(R([1,2])(PI/2)(south_w))

north = R([2,3])(PI/2)(plane)
west = R([1,2])(PI/2)(north)
south = T([1,2])([36,36])(R([1,2])(PI/2)(west))
east = T([1,2])([72,0])(R([1,2])(PI/2)(south))
north_d = R([2,3])(PI/2)(PROD([(DIFFERENCE([plane,T([1,2])([18,1.6])(window)])),Q(1)]))


basew = COLOR([0.80,0.80,0.54])(T([1,2])([2,2])(STRUCT([north_w,west_w,south_w,east_w])))
base0 = COLOR([0.80,0.80,0.54])(T([1,2])([2,2])(STRUCT([north_d,west,south,east])))
base1 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(basew))
base2 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(base1))
base3 = T([1,2,3])([1.61,1.61,9])(S([1,2])([0.90,0.90])(base2))
base4 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(base3))
base5 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(base4))


mock_up_3D = (STRUCT([base0,base1,base2,base3,base4,base5,two_and_half_model]))
VIEW(mock_up_3D)


