# API Reference <a name="API Reference"></a>


## Structs <a name="Structs"></a>

### CargoManifest <a name="@getsvelteup/projen-rust-project.CargoManifest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifest } from '@getsvelteup/projen-rust-project'

const cargoManifest: CargoManifest = { ... }
```

##### `package`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.package"></a>

```typescript
public readonly package: CargoManifestPackage;
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestPackage`](#@getsvelteup/projen-rust-project.CargoManifestPackage)

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.bench"></a>

```typescript
public readonly bench: CargoManifestBench[];
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestBench`](#@getsvelteup/projen-rust-project.CargoManifestBench)[]

---

##### `bin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.bin"></a>

```typescript
public readonly bin: CargoManifestBin[];
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestBin`](#@getsvelteup/projen-rust-project.CargoManifestBin)[]

---

##### `buildDependencies`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.buildDependencies"></a>

```typescript
public readonly buildDependencies: CargoManifestDependencies;
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestDependencies`](#@getsvelteup/projen-rust-project.CargoManifestDependencies)

---

##### `dependencies`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.dependencies"></a>

```typescript
public readonly dependencies: CargoManifestDependencies;
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestDependencies`](#@getsvelteup/projen-rust-project.CargoManifestDependencies)

---

##### `devDependencies`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.devDependencies"></a>

```typescript
public readonly devDependencies: CargoManifestDependencies;
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestDependencies`](#@getsvelteup/projen-rust-project.CargoManifestDependencies)

---

##### `example`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.example"></a>

```typescript
public readonly example: CargoManifestExample[];
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestExample`](#@getsvelteup/projen-rust-project.CargoManifestExample)[]

---

##### `lib`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.lib"></a>

```typescript
public readonly lib: CargoManifestLib;
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestLib`](#@getsvelteup/projen-rust-project.CargoManifestLib)

---

##### `profile`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.profile"></a>

```typescript
public readonly profile: {[ key: string ]: CargoManifestProfileCommonSettings};
```

- *Type:* {[ key: string ]: [`@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings`](#@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings)}

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifest.property.test"></a>

```typescript
public readonly test: CargoManifestTest[];
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestTest`](#@getsvelteup/projen-rust-project.CargoManifestTest)[]

---

### CargoManifestBench <a name="@getsvelteup/projen-rust-project.CargoManifestBench"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestBench } from '@getsvelteup/projen-rust-project'

const cargoManifestBench: CargoManifestBench = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.bench"></a>

```typescript
public readonly bench: boolean;
```

- *Type:* `boolean`

---

##### `doc`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.doc"></a>

```typescript
public readonly doc: boolean;
```

- *Type:* `boolean`

---

##### `doctest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.doctest"></a>

```typescript
public readonly doctest: boolean;
```

- *Type:* `boolean`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `harness`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.harness"></a>

```typescript
public readonly harness: boolean;
```

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.plugin"></a>

```typescript
public readonly plugin: boolean;
```

- *Type:* `boolean`

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBench.property.test"></a>

```typescript
public readonly test: boolean;
```

- *Type:* `boolean`

---

### CargoManifestBin <a name="@getsvelteup/projen-rust-project.CargoManifestBin"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestBin } from '@getsvelteup/projen-rust-project'

const cargoManifestBin: CargoManifestBin = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.bench"></a>

```typescript
public readonly bench: boolean;
```

- *Type:* `boolean`

---

##### `doc`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.doc"></a>

```typescript
public readonly doc: boolean;
```

- *Type:* `boolean`

---

##### `doctest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.doctest"></a>

```typescript
public readonly doctest: boolean;
```

- *Type:* `boolean`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `harness`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.harness"></a>

```typescript
public readonly harness: boolean;
```

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.plugin"></a>

```typescript
public readonly plugin: boolean;
```

- *Type:* `boolean`

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestBin.property.test"></a>

```typescript
public readonly test: boolean;
```

- *Type:* `boolean`

---

### CargoManifestDependencies <a name="@getsvelteup/projen-rust-project.CargoManifestDependencies"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestDependencies } from '@getsvelteup/projen-rust-project'

const cargoManifestDependencies: CargoManifestDependencies = { ... }
```

### CargoManifestExample <a name="@getsvelteup/projen-rust-project.CargoManifestExample"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestExample } from '@getsvelteup/projen-rust-project'

const cargoManifestExample: CargoManifestExample = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.bench"></a>

```typescript
public readonly bench: boolean;
```

- *Type:* `boolean`

---

##### `doc`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.doc"></a>

```typescript
public readonly doc: boolean;
```

- *Type:* `boolean`

---

##### `doctest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.doctest"></a>

```typescript
public readonly doctest: boolean;
```

- *Type:* `boolean`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `harness`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.harness"></a>

```typescript
public readonly harness: boolean;
```

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.plugin"></a>

```typescript
public readonly plugin: boolean;
```

- *Type:* `boolean`

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestExample.property.test"></a>

```typescript
public readonly test: boolean;
```

- *Type:* `boolean`

---

### CargoManifestLib <a name="@getsvelteup/projen-rust-project.CargoManifestLib"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestLib } from '@getsvelteup/projen-rust-project'

const cargoManifestLib: CargoManifestLib = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.bench"></a>

```typescript
public readonly bench: boolean;
```

- *Type:* `boolean`

---

##### `doc`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.doc"></a>

```typescript
public readonly doc: boolean;
```

- *Type:* `boolean`

---

##### `doctest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.doctest"></a>

```typescript
public readonly doctest: boolean;
```

- *Type:* `boolean`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `harness`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.harness"></a>

```typescript
public readonly harness: boolean;
```

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.plugin"></a>

```typescript
public readonly plugin: boolean;
```

- *Type:* `boolean`

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestLib.property.test"></a>

```typescript
public readonly test: boolean;
```

- *Type:* `boolean`

---

### CargoManifestPackage <a name="@getsvelteup/projen-rust-project.CargoManifestPackage"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestPackage } from '@getsvelteup/projen-rust-project'

const cargoManifestPackage: CargoManifestPackage = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `version`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* `string`

---

##### `authors`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.authors"></a>

```typescript
public readonly authors: string[];
```

- *Type:* `string`[]

---

##### `autobenches`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.autobenches"></a>

```typescript
public readonly autobenches: boolean;
```

- *Type:* `boolean`

---

##### `autobins`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.autobins"></a>

```typescript
public readonly autobins: boolean;
```

- *Type:* `boolean`

---

##### `autoexamples`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.autoexamples"></a>

```typescript
public readonly autoexamples: boolean;
```

- *Type:* `boolean`

---

##### `autotests`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.autotests"></a>

```typescript
public readonly autotests: boolean;
```

- *Type:* `boolean`

---

##### `categories`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.categories"></a>

```typescript
public readonly categories: string[];
```

- *Type:* `string`[]

---

##### `description`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

---

##### `documentation`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.documentation"></a>

```typescript
public readonly documentation: string;
```

- *Type:* `string`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `exclude`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.exclude"></a>

```typescript
public readonly exclude: string[];
```

- *Type:* `string`[]

---

##### `homepage`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

---

##### `include`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.include"></a>

```typescript
public readonly include: string[];
```

- *Type:* `string`[]

---

##### `keywords`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

---

##### `license`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`

---

##### `links`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.links"></a>

```typescript
public readonly links: string[];
```

- *Type:* `string`[]

---

##### `metadata`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.metadata"></a>

```typescript
public readonly metadata: string[];
```

- *Type:* `string`[]

---

##### `publish`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.publish"></a>

```typescript
public readonly publish: string[];
```

- *Type:* `string`[]

---

##### `readme`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.readme"></a>

```typescript
public readonly readme: string;
```

- *Type:* `string`

---

##### `repository`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

---

##### `resolver`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.resolver"></a>

```typescript
public readonly resolver: string;
```

- *Type:* `string`

---

##### `workspace`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestPackage.property.workspace"></a>

```typescript
public readonly workspace: string;
```

- *Type:* `string`

---

### CargoManifestProfileCommonSettings <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestProfileCommonSettings } from '@getsvelteup/projen-rust-project'

const cargoManifestProfileCommonSettings: CargoManifestProfileCommonSettings = { ... }
```

##### `debug`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings.property.debug"></a>

```typescript
public readonly debug: boolean | number;
```

- *Type:* `boolean` | `number`

---

##### `incremental`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings.property.incremental"></a>

```typescript
public readonly incremental: boolean;
```

- *Type:* `boolean`

---

##### `lto`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings.property.lto"></a>

```typescript
public readonly lto: string;
```

- *Type:* `string`

---

##### `package`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings.property.package"></a>

```typescript
public readonly package: {[ key: string ]: CargoManifestProfileCommonSettings};
```

- *Type:* {[ key: string ]: [`@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings`](#@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings)}

---

##### `panic`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings.property.panic"></a>

```typescript
public readonly panic: string;
```

- *Type:* `string`

---

##### `rpath`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestProfileCommonSettings.property.rpath"></a>

```typescript
public readonly rpath: string;
```

- *Type:* `string`

---

### CargoManifestTableCommonSettings <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestTableCommonSettings } from '@getsvelteup/projen-rust-project'

const cargoManifestTableCommonSettings: CargoManifestTableCommonSettings = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.bench"></a>

```typescript
public readonly bench: boolean;
```

- *Type:* `boolean`

---

##### `doc`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.doc"></a>

```typescript
public readonly doc: boolean;
```

- *Type:* `boolean`

---

##### `doctest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.doctest"></a>

```typescript
public readonly doctest: boolean;
```

- *Type:* `boolean`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `harness`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.harness"></a>

```typescript
public readonly harness: boolean;
```

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.plugin"></a>

```typescript
public readonly plugin: boolean;
```

- *Type:* `boolean`

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTableCommonSettings.property.test"></a>

```typescript
public readonly test: boolean;
```

- *Type:* `boolean`

---

### CargoManifestTest <a name="@getsvelteup/projen-rust-project.CargoManifestTest"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { CargoManifestTest } from '@getsvelteup/projen-rust-project'

const cargoManifestTest: CargoManifestTest = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`

---

##### `bench`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.bench"></a>

```typescript
public readonly bench: boolean;
```

- *Type:* `boolean`

---

##### `doc`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.doc"></a>

```typescript
public readonly doc: boolean;
```

- *Type:* `boolean`

---

##### `doctest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.doctest"></a>

```typescript
public readonly doctest: boolean;
```

- *Type:* `boolean`

---

##### `edition`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* `string`

---

##### `harness`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.harness"></a>

```typescript
public readonly harness: boolean;
```

- *Type:* `boolean`

---

##### `path`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* `string`

---

##### `plugin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.plugin"></a>

```typescript
public readonly plugin: boolean;
```

- *Type:* `boolean`

---

##### `test`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.CargoManifestTest.property.test"></a>

```typescript
public readonly test: boolean;
```

- *Type:* `boolean`

---

### PackageInfo <a name="@getsvelteup/projen-rust-project.PackageInfo"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { PackageInfo } from '@getsvelteup/projen-rust-project'

const packageInfo: PackageInfo = { ... }
```

### RustProjectBaseOptions <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions"></a>

#### Initializer <a name="[object Object].Initializer"></a>

```typescript
import { RustProjectBaseOptions } from '@getsvelteup/projen-rust-project'

const rustProjectBaseOptions: RustProjectBaseOptions = { ... }
```

##### `name`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* `string`
- *Default:* $BASEDIR

This is the name of your project.

---

##### `logging`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* [`projen.LoggerOptions`](#projen.LoggerOptions)
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* `string`
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
sub-projects.

---

##### `parent`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* [`projen.Project`](#projen.Project)

The parent project, if this project is part of a bigger project.

---

##### `projenrcJson`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* `boolean`
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcOptions;
```

- *Type:* [`projen.json.ProjenrcOptions`](#projen.json.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.json.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* [`projen.github.AutoApproveOptions`](#projen.github.AutoApproveOptions)
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* [`projen.github.AutoMergeOptions`](#projen.github.AutoMergeOptions)
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* `boolean`
- *Default:* true

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* [`projen.github.GitHubOptions`](#projen.github.GitHubOptions)
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* `boolean`
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* `boolean`
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* [`projen.ProjectType`](#projen.ProjectType)
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `readme`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* [`projen.SampleReadmeProps`](#projen.SampleReadmeProps)
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

##### `stale`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* `boolean`
- *Default:* true

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* [`projen.github.StaleOptions`](#projen.github.StaleOptions)
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* `boolean`
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* `string`

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* `string`

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* `boolean`

Author's Organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* `string`

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bundledDeps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* `string`[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `peerDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `deps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* `string`[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `description`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* `string`

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `entrypoint`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* `string`
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* `string`

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* `string`[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* `string`
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* `string`
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* `string`
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* [`projen.NpmAccess`](#projen.NpmAccess)
- *Default:* for scoped packages (e.g. `foo@bar`), the default is
`NpmAccess.RESTRICTED`, for non-scoped packages, the default is
`NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmDistTag`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* `string`
- *Default:* "latest"

Tags can be used to provide an alias instead of version numbers.

For example, a project might choose to have multiple streams of development
and use a different tag for each stream, e.g., stable, beta, dev, canary.

By default, the `latest` tag is used by npm to identify the current version
of a package, and `npm install <pkg>` (without any `@<version>` or `@<tag>`
specifier) installs the latest tag. Typically, projects only use the
`latest` tag for stable release versions, and use other tags for unstable
versions such as prereleases.

The `next` tag is used by some projects to identify the upcoming version.

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* `string`

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* `string`
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* `string`
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* [`projen.NodePackageManager`](#projen.NodePackageManager)
- *Default:* NodePackageManager.YARN

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* `string`
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* [`projen.PeerDependencyOptions`](#projen.PeerDependencyOptions)

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* `string`[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `projenCommand`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* `string`
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `repository`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* `string`

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* `string`

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scripts`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.scripts"></a>

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: `string`}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.

---

##### `stability`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* `string`

Package's Stability.

---

##### `antitamper`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.antitamper"></a>

```typescript
public readonly antitamper: boolean;
```

- *Type:* `boolean`
- *Default:* true

Checks that after build there are no modified files on git.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* `string`
- *Default:* "dist"

A directory which will contain artifacts to be published to npm.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

Version requirement of `jsii-release` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* `number`
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* `string`
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `releaseBranches`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: [`projen.release.BranchOptions`](#projen.release.BranchOptions)}
- *Default:* no additional branches are used for release. you can use
`addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* `boolean`
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* `string`
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* `string`
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* `string`
- *Default:* no prefix

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* [`projen.release.ReleaseTrigger`](#projen.release.ReleaseTrigger)
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* `string`
- *Default:* "Release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* [`projen.github.workflows.JobStep`](#projen.github.workflows.JobStep)[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* `string`
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* `string`
- *Default:* "main"

The name of the main release branch.

---

##### `autoApproveProjenUpgrades`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.autoApproveProjenUpgrades"></a>

```typescript
public readonly autoApproveProjenUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `codeCov`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* `boolean`
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v1 A secret is required for private repos. Configured with @codeCovTokenSecret.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* `string`
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* `string`
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* `string`
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* [`projen.github.DependabotOptions`](#projen.github.DependabotOptions)
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* `boolean`
- *Default:* true

Use github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* [`projen.UpgradeDependenciesOptions`](#projen.UpgradeDependenciesOptions)
- *Default:* default options

Options for depsUpgrade.

---

##### `gitignore`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* `string`[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* [`projen.JestOptions`](#projen.JestOptions)
- *Default:* default options

Jest options.

---

##### `mergifyOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.mergifyOptions"></a>

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* [`projen.github.MergifyOptions`](#projen.github.MergifyOptions)
- *Default:* default options

Options for mergify.

---

##### `mutableBuild`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* `string`[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* `boolean`
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenDuringBuild`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenDuringBuild"></a>

```typescript
public readonly projenDuringBuild: boolean;
```

- *Type:* `boolean`
- *Default:* true

Execute `projen` as the first step of the `build` task to synthesize project files.

This applies both to local builds and to CI builds.

Disabling this feature is NOT RECOMMENDED and means that manual changes to
synthesized project files will be persisted.

---

##### `projenrcJs`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* `boolean`
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* [`projen.javascript.ProjenrcOptions`](#projen.javascript.ProjenrcOptions)
- *Default:* default options

Options for .projenrc.js.

---

##### ~~`projenUpgradeAutoMerge`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenUpgradeAutoMerge"></a>

- *Deprecated:* use `autoApproveProjenUpgrades`.

```typescript
public readonly projenUpgradeAutoMerge: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically approve projen upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `projenUpgradeSchedule`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenUpgradeSchedule"></a>

```typescript
public readonly projenUpgradeSchedule: string[];
```

- *Type:* `string`[]
- *Default:* [ "0 6 * * *" ]

Customize the projenUpgrade schedule in cron expression.

---

##### `projenUpgradeSecret`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenUpgradeSecret"></a>

```typescript
public readonly projenUpgradeSecret: string;
```

- *Type:* `string`
- *Default:* no automatic projen upgrade pull requests

Periodically submits a pull request for projen upgrades (executes `yarn projen:upgrade`).

This setting is a GitHub secret name which contains a GitHub Access Token
with `repo` and `workflow` permissions.

This token is used to submit the upgrade pull request, which will likely
include workflow updates.

To create a personal access token see https://github.com/settings/tokens

---

##### `projenVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* `string`
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* `boolean`
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* `string`[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* `boolean`
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* `boolean`
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* `boolean`
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: any[];
```

- *Type:* `any`[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* [`projen.github.GitIdentity`](#projen.github.GitIdentity)
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* `string`
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `compileBeforeTest`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.compileBeforeTest"></a>

```typescript
public readonly compileBeforeTest: boolean;
```

- *Type:* `boolean`
- *Default:* if `testdir` is under `src/**`, the default is `true`, otherwise the default is `false`.

Compile the code before running tests.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* `boolean`
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `docgen`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* `boolean`
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* `string`
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* `string`
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* `boolean`
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* [`projen.EslintOptions`](#projen.EslintOptions)
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* `string`
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `package`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* `boolean`
- *Default:* true

Defines a `yarn package` command that will produce a tarball and place it under `dist/js`.

---

##### `projenrcTs`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* `boolean`
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* [`projen.typescript.ProjenrcOptions`](#projen.typescript.ProjenrcOptions)

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* `boolean`
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* `string`
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* `string`
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* [`projen.TypescriptConfigOptions`](#projen.TypescriptConfigOptions)
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* `string`
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* `string`
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `manifest`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.manifest"></a>

```typescript
public readonly manifest: CargoManifest;
```

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifest`](#@getsvelteup/projen-rust-project.CargoManifest)

---

##### `target`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBaseOptions.property.target"></a>

```typescript
public readonly target: string;
```

- *Type:* `string`

---

## Classes <a name="Classes"></a>

### RustProjectBase <a name="@getsvelteup/projen-rust-project.RustProjectBase"></a>

#### Initializers <a name="@getsvelteup/projen-rust-project.RustProjectBase.Initializer"></a>

```typescript
import { RustProjectBase } from '@getsvelteup/projen-rust-project'

new RustProjectBase(options: RustProjectBaseOptions)
```

##### `options`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.options"></a>

- *Type:* [`@getsvelteup/projen-rust-project.RustProjectBaseOptions`](#@getsvelteup/projen-rust-project.RustProjectBaseOptions)

---

#### Methods <a name="Methods"></a>

##### `addBench` <a name="@getsvelteup/projen-rust-project.RustProjectBase.addBench"></a>

```typescript
public addBench(benchName: string, opts: CargoManifestBench)
```

###### `benchName`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.benchName"></a>

- *Type:* `string`

---

###### `opts`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.opts"></a>

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestBench`](#@getsvelteup/projen-rust-project.CargoManifestBench)

---

##### `addBinary` <a name="@getsvelteup/projen-rust-project.RustProjectBase.addBinary"></a>

```typescript
public addBinary(binName: string, opts: CargoManifestBin)
```

###### `binName`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.binName"></a>

- *Type:* `string`

---

###### `opts`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.opts"></a>

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestBin`](#@getsvelteup/projen-rust-project.CargoManifestBin)

---

##### `addExample` <a name="@getsvelteup/projen-rust-project.RustProjectBase.addExample"></a>

```typescript
public addExample(exampleName: string, opts: CargoManifestExample)
```

###### `exampleName`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.exampleName"></a>

- *Type:* `string`

---

###### `opts`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.opts"></a>

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestExample`](#@getsvelteup/projen-rust-project.CargoManifestExample)

---

##### `addTest` <a name="@getsvelteup/projen-rust-project.RustProjectBase.addTest"></a>

```typescript
public addTest(testName: string, opts: CargoManifestTest)
```

###### `testName`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.testName"></a>

- *Type:* `string`

---

###### `opts`<sup>Required</sup> <a name="@getsvelteup/projen-rust-project.RustProjectBase.parameter.opts"></a>

- *Type:* [`@getsvelteup/projen-rust-project.CargoManifestTest`](#@getsvelteup/projen-rust-project.CargoManifestTest)

---

##### `postSynthesize` <a name="@getsvelteup/projen-rust-project.RustProjectBase.postSynthesize"></a>

```typescript
public postSynthesize()
```

##### `preSynthesize` <a name="@getsvelteup/projen-rust-project.RustProjectBase.preSynthesize"></a>

```typescript
public preSynthesize()
```

##### `synth` <a name="@getsvelteup/projen-rust-project.RustProjectBase.synth"></a>

```typescript
public synth()
```



#### Constants <a name="Constants"></a>

##### `devDeps` <a name="@getsvelteup/projen-rust-project.RustProjectBase.property.devDeps"></a>

- *Type:* `string`[]

---

##### `scriptsToReplace` <a name="@getsvelteup/projen-rust-project.RustProjectBase.property.scriptsToReplace"></a>

- *Type:* `string`[]

---


## Enums <a name="Enums"></a>

### CargoManifestCrateType <a name="CargoManifestCrateType"></a>

#### `BIN` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.BIN"></a>

---


#### `LIB` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.LIB"></a>

---


#### `R_LIB` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.R_LIB"></a>

---


#### `DY_LIB` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.DY_LIB"></a>

---


#### `CDY_LIB` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.CDY_LIB"></a>

---


#### `STATIC_LIB` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.STATIC_LIB"></a>

---


#### `PROC_MACRO` <a name="@getsvelteup/projen-rust-project.CargoManifestCrateType.PROC_MACRO"></a>

---

