all: js

JS:=$(shell ls *.js | grep -v min.js | perl -pe 's/.js/.min.js/')

js : $(JS)

%.min.js : %.js
	@rm -f $@
	java -jar ~/bin/compiler.jar \
	    --compilation_level SIMPLE_OPTIMIZATIONS \
	    --js $< \
	    --js_output_file $@



