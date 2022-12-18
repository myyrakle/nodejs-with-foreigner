package main

import "C"

import (
	"fmt"
	"strconv"
)

//export Add
func Add(a int, b int) int { return a + b }

//export Sub
func Sub(a int, b int) int { return a - b }

//export Mul
func Mul(a int, b int) int { return a * b }

//export Div
func Div(a int, b int) int { return a / b }

//export PrintToConsole
func PrintToConsole(msg string) {
	fmt.Println(msg)
}

func main() {
	result := Sub(Add(1, 2), 10)
	PrintToConsole(strconv.Itoa(result))
}
