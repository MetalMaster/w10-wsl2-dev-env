# w10-wsl2-dev-env
Set of instructions and assets to build a development environment on Windows10 with WSL2 (Windows Subsystem for Linux), docker and others...

## Prerequisites

* Windows 10 (Home edition is fine) version 2004 or higher

## Install WSL2

* Enable WSL2 and virtual machine feature (see https://docs.microsoft.com/en-us/windows/wsl/install-win10)
* Update linux Kernel (Using windows10 update feature)
* Set wsl2 as the default version: 
```
wsl --set-default-version 2
```

## Install Linux

* Go to Microsoft Store and search for Linux (I've installed Ubuntu 20.04 LTS) 
* Run Linux (the first time it will ask to create a new user)
* If you got an error on file system compression or crypto, go to Folder: C:\Users\<YOUR_USER>\AppData\Local\Packages\<YOUR_LINUX_DISTRO> and Right Click -> Properties -> General -> Advanced: remove the flag from "Compress contents to save disk space"

## Install Visual Studio Code and usefull plugins

* Install Visual Studio Code: https://code.visualstudio.com/#alt-downloads
* Install VSCode Remote Development Extension Pack: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack

## Install docker

* Install Docker and WSL plugins: https://code.visualstudio.com/blogs/2020/03/02/docker-in-wsl2
* On linux shell add user to "docker" group:
```
usermod -G docker <USERNAME>
```

