from exercise2 import *



def automatizedDiagramMerge(master,mergeTo,diagram):
	V,CV = master
	sort = sorted(mergeTo,reverse=True)
	for i in range(len)(mergeTo):
		if mergeTo[i] in CV:
        		master = diagram2cell(master,diagram,mergeTo[i])	
   	return master


def automatizedDiagramNumbering(master):
	V,CV = master
	hpc = SKEL_1(STRUCT(MKPOLS(first)))
	hpc = cellNumbering (first,hpc)(range(len(first[1])),CYAN,2)
  	return hpc
	
def automatizedDiagramRemove(master,removeTo):
	V,CV = master
	sort = sorted(removeTo,reverse=False)
	for i in range(len)(removeTo):
		if removeTo[i] in CV:
			tempRem = [removeTo[i]]
			master = V,[cell for k,cell in enumerate(CV) if not (k in tempRem)]	
	return master			