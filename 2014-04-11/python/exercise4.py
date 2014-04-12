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



VIEW(flower_container)