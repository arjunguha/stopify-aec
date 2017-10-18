all:
	sbt "; project rootJS; fastOptJS; project rootJVM; assembly"
	sed -e '20,23d' js/target/scala-2.12/root-fastopt.js | \
	  awk 'NR==20{print "var $$g = typeof window === \"object\" ? window : global;"}1' > \
		../js-build/Tracer.js
	@echo "Produced ../js-build/Tracer.js"