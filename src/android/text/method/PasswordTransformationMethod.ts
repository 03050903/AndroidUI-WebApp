/*
 * Copyright (C) 2006 The Android Open Source Project
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

///<reference path="SingleLineTransformationMethod.ts"/>

module android.text.method {
    export class PasswordTransformationMethod extends SingleLineTransformationMethod {
        private static instance:PasswordTransformationMethod;

        getTransformation(source:String, v:android.view.View):String {
            let transform = super.getTransformation(source, v);
            if(transform) transform = new Array(transform.length+1).join('•');
            return transform;
        }

        static getInstance():PasswordTransformationMethod  {
            if (PasswordTransformationMethod.instance != null) return PasswordTransformationMethod.instance;
            PasswordTransformationMethod.instance = new PasswordTransformationMethod();
            return PasswordTransformationMethod.instance;
        }
    }
}