#include <node.h>
#include <nan.h>

using namespace v8;

void Lenght(const Nan::FunctionCallbackInfo<Value>& info) {
  if (info.Length() < 1) {
    Nan::ThrowTypeError("Wrong number of arguments");
    return;
  }
  if (!info[0]->IsString()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }
  Local<String> str = info[0]->ToString();
  if (str->IsExternal() && str->IsOneByte()) {
    info.GetReturnValue().Set(str->Length());
    return;
  }

  if (str->IsOneByte()) {
    info.GetReturnValue().Set(str->Length());
    return;
  }

}

void ContainsNonLatinCodepoints(const Nan::FunctionCallbackInfo<Value>& info) {
  if (info.Length() < 1) {
    Nan::ThrowTypeError("Wrong number of arguments");
    return;
  }
  if (!info[0]->IsString()) {
    Nan::ThrowTypeError("Wrong arguments");
    return;
  }
  info.GetReturnValue().Set(!info[0]->ToString()->ContainsOnlyOneByte());
}

void Init(Local<Object> exports) {
  exports->Set(Nan::New("lenght").ToLocalChecked(),
               Nan::New<FunctionTemplate>(Lenght)->GetFunction());
  exports->Set(Nan::New("containsNonLatinCodepoints").ToLocalChecked(),
               Nan::New<FunctionTemplate>(ContainsNonLatinCodepoints)->GetFunction());
}

NODE_MODULE(runes, Init)
