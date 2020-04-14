//
//  ToastModule.m
//  TestApp
//
//  Created by BinBytes on 28/03/20.
//

#import "ToastModule.h"
#import <React/RCTLog.h>

@implementation ToastModule
RCT_EXPORT_MODULE(Toast);

RCT_EXPORT_METHOD(show)
{
  UIAlertView *alert = [[UIAlertView alloc] initWithTitle:@"Native Test" message:@"Message from Native Module" delegate:self cancelButtonTitle:@"Cancel" otherButtonTitles:@"Ok", nil];
  [alert show];
}
@end
