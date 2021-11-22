import { uxp } from "../../inspector/types/uxp";
import { rootStore,IRootState} from "../../shared/store"
import { generateHtmlFileCode, generateScriptFileCode, getAllPanels, getManifestCode, getManifestGeneric } from "../sorSelectors";
import Zip from "jszip";

//const fs = require("storage");
const fs:uxp.storage.LocalFileSystemProvider = require("uxp").storage.localFileSystem;

export class SorcererBuilder{
	constructor() {
		
	}

	public static async buildPlugin():Promise<void> {
		
		const state: IRootState = rootStore.getState()
		
		const pluginName = getManifestGeneric(state).name;
		const manifestContent = getManifestCode(state);

		const folder = await fs.getFolder();
		const targetFolder = await folder.createFolder(pluginName);

		const manifestFile = await targetFolder.createFile("manifest.json", { overwrite: true });
		await manifestFile.write(manifestContent, { append: false, format: require("uxp").storage.formats.utf8 });

		const indexFile = await targetFolder.createFile("index.html", { overwrite: true });
		const htmlContent = generateHtmlFileCode(state);
		await indexFile.write(htmlContent, { append: false, format: require("uxp").storage.formats.utf8 });

		const scriptFile = await targetFolder.createFile("index.js", { overwrite: true });
		const scriptContent = generateScriptFileCode(state);
		await scriptFile.write(scriptContent, { append: false, format: require("uxp").storage.formats.utf8 });
/*
		const zip = new Zip();
		zip.file("manifest.json", manifestContent, {
			unixPermissions: "0644",
			dosPermissions: 0x0020,
			compression:""
		});
		zip.file("index.html", htmlContent, {
			unixPermissions: "0644",
			dosPermissions: 0x0020
		});
		zip.file("index.js", scriptContent, {
			unixPermissions: "0644",
			dosPermissions: 0x0020
		});

		const zipResult = await zip.generateAsync({
			type: "arraybuffer",
			compression: "DEFLATE",
			platform: "UNIX",

		});
		const zipFile = await folder.createFile(pluginName + ".ccx", { overwrite: true });
		zipFile.write(zipResult, { append: false, format: require("uxp").storage.formats.binary });
*/
//		debugger;
	}

}