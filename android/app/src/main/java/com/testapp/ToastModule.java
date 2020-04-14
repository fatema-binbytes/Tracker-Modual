package com.testapp;

import android.widget.Toast;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by BinBytes on 26-02-2018.
 */

public class ToastModule extends ReactContextBaseJavaModule {

    public ToastModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    public String getName() {
        return "Toast";
    }

    @ReactMethod
    public void show() {
        Toast.makeText(getReactApplicationContext(), "Toast from Native Code", Toast.LENGTH_SHORT).show();
    }
}
