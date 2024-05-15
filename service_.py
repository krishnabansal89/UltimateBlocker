# service.py
import win32service
import win32serviceutil
import win32api
import win32con
import sys
import os
import shutil
import tempfile

# from win32service import 
class PythonService(win32serviceutil.ServiceFramework):
    _svc_name_ = "PythonService"
    _svc_display_name_ = "Python Service"
    _svc_description_ = "A simple Python service"

    def __init__(self, *args):
        super().__init__(*args)

    def SvcStop(self):
        self.ReportServiceStatus(win32service.SERVICE_STOP_PENDING)
        # Add any cleanup code here

    def SvcDoRun(self):
        self.ReportServiceStatus(win32service.SERVICE_START_PENDING)
        try:
            # Run your Python script here
            # script_path = os.path.join(os.path.dirname(__file__), "server.py")
            temp_dir = tempfile.gettempdir()
            server_file = os.path.join(os.path.dirname(__file__), "server.py")
            temp_server_file = os.path.join(temp_dir, "server.py")
            print(temp_server_file)
            shutil.copy(server_file, temp_server_file)
            os.chdir(temp_dir)
            os.system(f'python "{temp_server_file}"')
        except Exception as e:
            self.SvcStop()
            self.ReportServiceStatus(win32service.SERVICE_STOPPED)
            raise e
        self.ReportServiceStatus(win32service.SERVICE_RUNNING)

if __name__ == '__main__':
    if len(sys.argv) == 1:
        try:
            evtsrc_dll = os.path.abspath(win32serviceutil.__file__)
            servicemanager = win32service.PushServiceFramework(PythonService._svc_name_, evtsrc_dll)
            servicemanager.StartService()
            servicemanager.WaitForQuitSignal()
        except (Exception, KeyboardInterrupt) as e:
            print(e)
    else:
        win32serviceutil.HandleCommandLine(PythonService)