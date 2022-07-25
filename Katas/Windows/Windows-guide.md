# Position #: hash value

- Open PowerShell window
- type `Get-FileHash <FILENAME & PATH> -Algorithm SHA256 | Format-List`
  ```
  Algorithm : SHA256
  Hash      : 6AAA1FB3015572AF480091C06ECB25F77A6535268A05DD2362B24C9338420CBB
  Path      : C:\Users\trewa\Downloads\node-v12.2.0-x64.msi
  ```
- Documented [here](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/get-filehash?view=powershell-6)
