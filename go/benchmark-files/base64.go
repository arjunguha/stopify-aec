/* NOTE(rachit): Code from https://github.com/kostya/benchmarks/blob/master/base64/test.go

This benchmarks go's own implementation of base64 encoding.

*/
package main

import "encoding/base64"
import "strings"

func main() {
	STR_SIZE := 1000000
	TRIES := 100

	str2 := ""
	bytes := []byte(strings.Repeat("a", STR_SIZE))

	coder := base64.StdEncoding

	s := 0

	for i := 0; i < TRIES; i += 1 {
		str2 = coder.EncodeToString(bytes)
		s += len(str2)
	}

	s = 0
	var str3 []byte
	for i := 0; i < TRIES; i += 1 {
		str3, _ = coder.DecodeString(str2)
		s += len(str3)
	}
}
