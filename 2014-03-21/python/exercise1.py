from pyplasm import *

#creation of all the floors of the pagoda, S and T functions applied
floor0 = (PROD([QUOTE([40]),QUOTE([40])]))
floor1 = COLOR([0.57,0.77,0.45])(T([3])(9)(floor0))
floor2 = T([1,2,3])([2,2,9])(S([1,2])([0.90,0.90])(floor1))
floor3 = T([1,2,3])([1.8,1.8,9])(S([1,2])([0.90,0.90])(floor2))
floor4 = T([1,2,3])([1.61,2.61,9])(S([1,2])([0.90,0.90])(floor3))
floor5 = T([1,2,3])([1.4,1.4,9])(S([1,2])([0.90,0.90])(floor4))
floor6 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(floor5))
floor7 = T([1,2,3])([2.4,2.4,9])(S([1,2])([0.90,0.90])(floor5))



#assembling the floors
two_and_half_model = STRUCT([COLOR([0.54,0.54,0.54])(floor0),floor1,floor2,floor3,floor4,floor5,floor6])


VIEW(two_and_half_model)