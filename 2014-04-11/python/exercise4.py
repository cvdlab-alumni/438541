from pyplasm import *
from exercise3 import *


def dom(n):
 	return INTERVALS(1)(n)	

#genera il solido di rotazione di un piano, la distanza dall'origine produce rotazioni differenti
def ROTATIONALSOLID (args):
    section = args
    def map_fn(point):
		u, v, w = point
		x, y, z = section([u, v])
		ret = [x*math.cos(w), x*math.sin(w), z]
		return ret
    return map_fn 	

#transla i punti di una lista data una lista di valori da applicare
def translatePoints(tval):
    def translatePoints0(args):
    	for i in range(len(args)):
    	     args[i]=args[i]-tval[i]
    	return args
    return translatePoints0

#transla i punti delle liste di una lista, data una lista di valori da applicare
def vectTranslatePoints(tval):
	def appAllTp0(args):
		for i in range(len(args)):
			args[i] = translatePoints(tval)(args[i])
		return args
	return appAllTp0

points_flowerc1= vectTranslatePoints([7.47,0,3.07])([[7.25,0, 3.05], [7.02,0, 3.32], [6.98,0, 3.54], [7,0, 3.59]])
points_flowerc2=vectTranslatePoints([7.47,0,3.07])([[7.47,0, 3.07],[7.47,0, 3.6]])

profile_flower1 = BEZIER(S1)(points_flowerc1)
profile_flower2 = BEZIER(S1)(points_flowerc2)

dom2D = PROD(AA(dom)([12, 1]))
dom3D = PROD([dom2D, S(1)(2*PI)(INTERVALS(1)(12))])

flower_section = BEZIER(S2)([profile_flower1, profile_flower2])
flower_container = MAP(ROTATIONALSOLID(flower_section))(dom3D)

diff_c = JOIN([MAP(lambda x: [0.23*COS(x[0]),0.23*SIN(x[0]),0.1])(INTERVALS(2*PI)(12)),MAP(lambda x: [0.4*COS(x[0]),0.4*SIN(x[0]),0.53])(INTERVALS(2*PI)(12))])



flower_container= DIFFERENCE([flower_container,diff_c])


tronco = COLOR([0.5,0.25,0])(JOIN([MAP(lambda x: [0.1*COS(x[0]),0.1*SIN(x[0]),0])(INTERVALS(2*PI)(24)),MAP(lambda x: [0.1*COS(x[0]),0.1*SIN(x[0]),1.63])(INTERVALS(2*PI)(24))]))

chioma = T(3)(1.5)(COLOR(GREEN)(JOIN([SPHERE(.5)([20,20]),])))

vaso = COLOR([0.8,0.65,0])((STRUCT([tronco,flower_container,chioma])))

lista_vasi = vaso
for i in range(1,7):
	lista_vasi = STRUCT([lista_vasi,T(1)(i*10)(vaso)])


external_1= COLOR([0.6,0.6,0.6])(PROD([PROD([Q(150),Q(2)]),Q(0.2)]))
external_2= T(2)(13)(external_1)
central = COLOR([0.4,0.4,0.4])(T(2)(2)((PROD([PROD([Q(150),Q(12)]),Q(0.1)]))))

road = T([1,2])([-75,-180])(STRUCT([external_1,external_2,central]))

plan_with_elements= (STRUCT([small_area_plan,T([1,2,3])([-28,-30,2])(R([1,2])(PI/2)(lista_vasi)),T([1,2,3])([28,-30,2])(R([1,2])(PI/2)(lista_vasi)),T([1,2,3])([-30,30,2])(lista_vasi),road]))

base_panchina = T(3)(0.15)(PROD([PROD([Q(1.25),Q(0.25)]),Q(0.2)]))
piedi_panchina = PROD([PROD([Q(0.15),Q(0.25)]),Q(0.2)])
panchina = STRUCT([base_panchina,piedi_panchina,T(1)(0.3)(piedi_panchina),T(1)(0.8)(piedi_panchina),T(1)(1.1)(piedi_panchina),])

panchine = STRUCT([panchina, T(1)(40)(panchina), T(1)(70)(panchina), T(1)(100)(panchina), T(1)(130)(panchina)])

plan_with_elements = STRUCT([plan_with_elements,T([1,2,3])([-70,-180,0.2])(panchine)])

VIEW(plan_with_elements)

