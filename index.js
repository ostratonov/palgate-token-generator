const ffi = require('ffi-napi')
const ref = require('ref-napi')
const path = require('path')

const byteArray = ref.refType(ref.types.byte) // Represents a pointer to a byte array

const libPath = path.join(__dirname, 'lib/libnative-lib.so')
const lib = ffi.Library(libPath, {
    Java_com_bluegate_shared_FaceDetectNative_getFacialLandmarks: ['int', [byteArray, 'int', 'int', 'int']],
})

export function getToken(arg1, arg2, arg3, arg4) {
    return lib.Java_com_bluegate_shared_FaceDetectNative_getFacialLandmarks(arg1, arg2, arg3, arg4)
}
