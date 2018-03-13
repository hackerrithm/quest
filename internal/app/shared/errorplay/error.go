package errorplay

// CheckErr checks err and prints the error
func CheckErr(err error) {
	if err != nil {
		panic("err: " + err.Error())
	}
}
