import { Component, OnInit } from '@angular/core';
import { C360ContextService } from 'angular2-c360';
import { Router } from '@angular/router';

declare var ADSK: any;

@Component({
  moduleId: module.id,
  selector: 'app-error',
  templateUrl: 'error.component.html',
  styleUrls: ['error.component.css']
})
export class ErrorComponent implements OnInit {
  message: string;

  constructor(private c360Context: C360ContextService, private router: Router) {}

  ngOnInit() {
    this.message = this.getErrorMessage();
  }

  retry() {
      this.router.navigate(['']);
  }

  getErrorMessage() {
      let message = "Unknown Error";
      let viewer = this.c360Context.getViewer();
      let checkContext = false;            

      if (viewer) {
          switch(viewer.state) {
              case ADSK.C360.loadedState.GPUAccelerationDisabled:
                  message = "GPU Acceleration Disabled";
                  break;
              case ADSK.C360.loadedState.SecurityBlocked:
                  message = "Security Blocked";
                  break;
              case ADSK.C360.loadedState.Not3DCapable:
                  message = "Not 3D Capable";
                  break;
              case ADSK.C360.loadedState.TemporarilyUnavailable:
                  message = "Temporarily Unavailable";
                  break;
              case ADSK.C360.loadedState.NotStandardsCompliant:
                  message = "Not Standards Compliant";
                  break;
              case ADSK.C360.loadedState.WebGLNotSupported:
                  message = "WebGL Not Supported";
                  break;
              case ADSK.C360.loadedState.ThirdPartyCookiesDisabled:
                  message = "Third Party Cookies Disabled";
                  break;
              case ADSK.C360.loadedState.DesignOpenInOtherWindowOrTab:
                  message = "Design Open in Other Window or Tab";
                  break;
              case ADSK.C360.loadedState.ServerMaintenance:
                  message = "Server Maintenance";
                  break;
              case ADSK.C360.loadedState.Forbidden:
                  message = "Forbidden";
                  break;
              case ADSK.C360.loadedState.NotFound:
                  message = "Design Not Found";
                  break;
              case ADSK.C360.loadedState.Error:
                  checkContext = true;
                  break;
              case ADSK.C360.loadedState.Loaded:
                  checkContext = true;
                  break;                    
          }
      } else {
          checkContext = true;
      }

      if (checkContext) {
          var lastError = this.c360Context.getLastError();
          
          if (lastError) {
              message = lastError;
          }
      }

      return message;
  }
}
