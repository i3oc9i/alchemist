/* eslint-disable quotes */
import { getAtnInitialState } from "../atnDecoder/atnInitialState";
import { IInspectorState } from "./model/types";
import { getSorInitialState } from "../sorcerer/sorInitialState";



export function getInitialState(): IInspectorState {
	return {
		version: [11, 0, 0],
		selectedReferenceType: "layer",
		filterBySelectedReferenceType: "off",
		descriptorsGrouping: "eventName",
		inspector: {
			activeTab: "content",
			content: {
				viewType: "tree",
				search:"",
				treePath: [],
				autoExpandLevels: 0,
				expandedTree: [],
			},
			difference: {
				viewType: "tree",
				treePath: [],
				autoExpandLevels: 0,
				expandedTree: [],
			},
			dom: {
				treePath: [],
				autoExpandLevels: 0,
				expandedTree: [],
			},
			code: {
				viewType: "generated",
			},
			info: {
				showOptionalDocumentReference: true,
			},
		},
		descriptors: [
		],
		dispatcher: {
			snippets: [{ content: `const batchPlay = require("photoshop").action.batchPlay;\n\nreturn await batchPlay([{"_obj": "invert"}],{});` }],
		},
		atnConverter: getAtnInitialState(),

		targetReference: [
			{
				type: "listener",
				data: [],
			},
			{
				type: "dispatcher",
				data: [],
			},
			{
				type: "notifier",
				data: [],
			},
			{
				type: "replies",
				data: [],
			},
			{
				type: "application",
				data: [
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "customDescriptor",
				data: [
					{
						subType: "category",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "history",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "history",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "snapshot",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "snapshot",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "layer",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "layer",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "path",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "path",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "layer",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "channel",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "channel",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "layer",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "document",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "guide",
				data: [
					{
						subType: "document",
						content: { value: "active", filterBy: "off" },
					},
					{
						subType: "guide",
						content: { value: "", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "action",
				data: [
					{
						subType: "actionset",
						content: { value: "", filterBy: "off" },
					},
					{
						subType: "action",
						content: { value: "", filterBy: "off" },
					},
					{
						subType: "command",
						content: { value: "", filterBy: "off" },
					},
					{
						subType: "property",
						content: { value: "notSpecified", filterBy: "off" },
					},
				],
			},
			{
				type: "generator",
				data: [],
			},
			{
				type: "timeline",
				data: [
					{
						subType: "property",
						content: { value: "", filterBy: "off" },
					},
				],
			},
			{
				type: "animationFrame",
				data: [
					{
						subType: "property",
						content: { value: "", filterBy: "off" },
					},
				],
			},
			{
				type: "animation",
				data: [
					{
						subType: "property",
						content: { value: "", filterBy: "off" },
					},
				],
			},
		],
		settings: {
			settingsVisible:false,
			/** Sometimes you can get data when object in reference array is selected. This option is intended to select that item automatically for you */
			fontSize: "size-default",
			makeRawDataEasyToInspect: false,
			selectReferenceBeforeGet: true,
			searchTerm: null,
			listenerFilter: {
				type: "none",
				exclude: [
					"select",
					"set",
				],
				include: [],
			},
			notifierFilter: {
				type: "none",
				exclude: [
					"layersFiltered",
					"toolModalStateChanged",
					"invokeCommand",
					"modalStateChanged",
					"historyStateChanged",
				],
				include: [],
			},
			lastHistoryID: -1,
			autoUpdateInspector: false,
			groupDescriptors: "strict",
			autoUpdateListener: false,
			// Don't worry Spy is helper tool to get additional data from PS if it is turned on
			autoUpdateSpy:false,
			isSpyInstalled: false,
			lastSelectedItem: null,
			dontShowMarketplaceInfo: false,
			activeDescriptors: [],
			neverRecordActionNames: ["idle"],
			accordionExpandedIDs:[],
			properties: [
				{
					type: "application",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "$PnCK - paintCursorKind", stringID: "$PnCK", type: "default" },
						{ title: "active", stringID: "active", type: "default" },
						{ title: "autoShowHomeScreen", stringID: "autoShowHomeScreen", type: "default" },
						{ title: "available", stringID: "available", type: "default" },
						{ title: "backgroundColor", stringID: "backgroundColor", type: "default" },
						{ title: "brushes", stringID: "brushes", type: "default" },
						{ title: "brushSettingsLocks", stringID: "brushSettingsLocks", type: "default" },
						{ title: "buildNumber", stringID: "buildNumber", type: "default" },
						{ title: "cachePrefs", stringID: "cachePrefs", type: "default" },
						{ title: "colorPickerPrefs", stringID: "colorPickerPrefs", type: "default" },
						{ title: "colorSettings", stringID: "colorSettings", type: "default" },
						{ title: "controlColor", stringID: "controlColor", type: "default" },
						{ title: "currentToolOptions", stringID: "currentToolOptions", type: "default" },
						{ title: "defaultAppScript", stringID: "defaultAppScript", type: "default" },
						{ title: "displayPrefs", stringID: "displayPrefs", type: "default" },
						{ title: "documentArea", stringID: "documentArea", type: "default" },
						{ title: "exactPoints", stringID: "exactPoints", type: "default" },
						{ title: "experimentalFeatures", stringID: "experimentalFeatures", type: "default" },
						{ title: "exportAssetsPrefs", stringID: "exportAssetsPrefs", type: "default" },
						{ title: "eyeDropperSample", stringID: "eyeDropperSample", type: "default" },
						{ title: "fileSavePrefs", stringID: "fileSavePrefs", type: "default" },
						{ title: "fontLargeName", stringID: "fontLargeName", type: "default" },
						{ title: "fontLargeSize", stringID: "fontLargeSize", type: "default" },
						{ title: "fontList", stringID: "fontList", type: "default" },
						{ title: "fontSmallName", stringID: "fontSmallName", type: "default" },
						{ title: "fontSmallSize", stringID: "fontSmallSize", type: "default" },
						{ title: "foregroundColor", stringID: "foregroundColor", type: "default" },
						{ title: "generalPreferences", stringID: "generalPreferences", type: "default" },
						{ title: "globalAngle", stringID: "globalAngle", type: "default" },
						{ title: "gradientClassEvent", stringID: "gradientClassEvent", type: "default" },
						{ title: "gridMajor", stringID: "gridMajor", type: "default" },
						{ title: "gridMinor", stringID: "gridMinor", type: "default" },
						{ title: "guidesPrefs", stringID: "guidesPrefs", type: "default" },
						{ title: "hasMatchingOpenDoc", stringID: "hasMatchingOpenDoc", type: "default" },
						{ title: "highlightColorOption", stringID: "highlightColorOption", type: "default" },
						{ title: "historyLogPreferences", stringID: "historyLogPreferences", type: "default" },
						{ title: "historyPreferences", stringID: "historyPreferences", type: "default" },
						{ title: "homeScreenReady", stringID: "homeScreenReady", type: "default" },
						{ title: "homeScreenVisibility", stringID: "homeScreenVisibility", type: "default" },
						{ title: "hostName", stringID: "hostName", type: "default" },
						{ title: "hostVersion", stringID: "hostVersion", type: "default" },
						{ title: "interfaceBevelHighlight", stringID: "interfaceBevelHighlight", type: "default" },
						{ title: "interfaceBevelShadow", stringID: "interfaceBevelShadow", type: "default" },
						{ title: "interfaceBlack", stringID: "interfaceBlack", type: "default" },
						{ title: "interfaceBorder", stringID: "interfaceBorder", type: "default" },
						{ title: "interfaceButtonDarkShadow", stringID: "interfaceButtonDarkShadow", type: "default" },
						{ title: "interfaceButtonDownFill", stringID: "interfaceButtonDownFill", type: "default" },
						{ title: "interfaceButtonShadow", stringID: "interfaceButtonShadow", type: "default" },
						{ title: "interfaceButtonText", stringID: "interfaceButtonText", type: "default" },
						{ title: "interfaceButtonUpFill", stringID: "interfaceButtonUpFill", type: "default" },
						{ title: "interfaceCanvasColor", stringID: "interfaceCanvasColor", type: "default" },
						{ title: "interfaceIconFillActive", stringID: "interfaceIconFillActive", type: "default" },
						{ title: "interfaceIconFillDimmed", stringID: "interfaceIconFillDimmed", type: "default" },
						{ title: "interfaceIconFillSelected", stringID: "interfaceIconFillSelected", type: "default" },
						{ title: "interfaceIconFrameActive", stringID: "interfaceIconFrameActive", type: "default" },
						{ title: "interfaceIconFrameDimmed", stringID: "interfaceIconFrameDimmed", type: "default" },
						{ title: "interfaceIconFrameSelected", stringID: "interfaceIconFrameSelected", type: "default" },
						{ title: "interfaceOWLPaletteFill", stringID: "interfaceOWLPaletteFill", type: "default" },
						{ title: "interfacePaletteFill", stringID: "interfacePaletteFill", type: "default" },
						{ title: "interfacePrefs", stringID: "interfacePrefs", type: "default" },
						{ title: "interfaceRed", stringID: "interfaceRed", type: "default" },
						{ title: "interfaceStaticText", stringID: "interfaceStaticText", type: "default" },
						{ title: "interfaceToolTipBackground", stringID: "interfaceToolTipBackground", type: "default" },
						{ title: "interfaceToolTipText", stringID: "interfaceToolTipText", type: "default" },
						{ title: "interfaceTransparencyBackground", stringID: "interfaceTransparencyBackground", type: "default" },
						{ title: "interfaceTransparencyForeground", stringID: "interfaceTransparencyForeground", type: "default" },
						{ title: "interfaceWhite", stringID: "interfaceWhite", type: "default" },
						{ title: "interpolationMethod", stringID: "interpolationMethod", type: "default" },
						{ title: "keyboardFocus", stringID: "keyboardFocus", type: "default" },
						{ title: "kuiBrightnessLevel", stringID: "kuiBrightnessLevel", type: "default" },
						{ title: "layerThumbnailSize", stringID: "layerThumbnailSize", type: "default" },
						{ title: "layerVisibilityChangesAreUndoable", stringID: "layerVisibilityChangesAreUndoable", type: "default" },
						{ title: "limited", stringID: "limited", type: "default" },
						{ title: "localeInfo", stringID: "localeInfo", type: "default" },
						{ title: "modalDialogLevel", stringID: "modalDialogLevel", type: "default" },
						{ title: "modalToolLevel", stringID: "modalToolLevel", type: "default" },
						{ title: "mondoFilterLevel", stringID: "mondoFilterLevel", type: "default" },
						{ title: "MRUColorList", stringID: "MRUColorList", type: "default" },
						{ title: "multiUndoEnabled", stringID: "multiUndoEnabled", type: "default" },
						{ title: "numberOfActionSets", stringID: "numberOfActionSets", type: "default" },
						{ title: "numberOfCacheLevels", stringID: "numberOfCacheLevels", type: "default" },
						{ title: "numberOfCacheLevels64", stringID: "numberOfCacheLevels64", type: "default" },
						{ title: "numberOfDocuments", stringID: "numberOfDocuments", type: "default" },
						{ title: "osVersion", stringID: "osVersion", type: "default" },
						{ title: "panelList", stringID: "panelList", type: "default" },
						{ title: "panelUILockIsEnabled", stringID: "panelUILockIsEnabled", type: "default" },
						{ title: "pluginPicker", stringID: "pluginPicker", type: "default" },
						{ title: "pluginPrefs", stringID: "pluginPrefs", type: "default" },
						{ title: "PnCK", stringID: "PnCK", type: "default" },
						{ title: "preferencesFolder", stringID: "preferencesFolder", type: "default" },
						{ title: "presetManager", stringID: "presetManager", type: "default" },
						{ title: "recentFiles", stringID: "recentFiles", type: "default" },
						{ title: "recentFilesAsStrings", stringID: "recentFilesAsStrings", type: "default" },
						{ title: "regionCode", stringID: "regionCode", type: "default" },
						{ title: "rulerUnits", stringID: "rulerUnits", type: "default" },
						{ title: "scratchDiskPreferences", stringID: "scratchDiskPreferences", type: "default" },
						{ title: "showToolTips", stringID: "showToolTips", type: "default" },
						{ title: "size", stringID: "size", type: "default" },
						{ title: "tileSize", stringID: "tileSize", type: "default" },
						{ title: "tool", stringID: "tool", type: "default" },
						{ title: "toolsPreferences", stringID: "toolsPreferences", type: "default" },
						{ title: "toolSupportsBrushes", stringID: "toolSupportsBrushes", type: "default" },
						{ title: "toolSupportsBrushPresets", stringID: "toolSupportsBrushPresets", type: "default" },
						{ title: "transparencyGamutPreferences", stringID: "transparencyGamutPreferences", type: "default" },
						{ title: "transparencyPrefs", stringID: "transparencyPrefs", type: "default" },
						{ title: "typePreferences", stringID: "typePreferences", type: "default" },
						{ title: "unitsPrefs", stringID: "unitsPrefs", type: "default" },
						{ title: "useCacheForHistograms", stringID: "useCacheForHistograms", type: "default" },
						{ title: "used", stringID: "used", type: "default" },
						{ title: "vectorToolSettings", stringID: "vectorToolSettings", type: "default" },
						{ title: "VMStatus", stringID: "VMStatus", type: "default" },
						{ title: "watchSuspension", stringID: "watchSuspension", type: "default" },
						{ title: "welcomeScreen2", stringID: "welcomeScreen2", type: "default" },
						{ title: "workspaceList", stringID: "workspaceList", type: "default" },
						{ title: "workspacePreferences", stringID: "workspacePreferences", type: "default" },
						{ title: "z3DPrefs", stringID: "z3DPrefs", type: "default" },
						
						// hidden
						{ title: "brush", stringID: "brush", type: "hidden" },
						{ title: "canvasBackgroundColors", stringID: "canvasBackgroundColors", type: "hidden" },
						{ title: "colorProfileList", stringID: "colorProfileList", type: "hidden" },
						{ title: "cursorCrosshair", stringID: "cursorCrosshair", type: "hidden" },
						{ title: "cursorShape", stringID: "cursorShape", type: "hidden" },
						{ title: "FileFormats", stringID: "FileFormats", type: "hidden" },
						{ title: "httpsCommandGet", stringID: "httpsCommandGet", type: "hidden" },
						{ title: "LoadedPluginsNames", stringID: "LoadedPluginsNames", type: "hidden" },
						{ title: "menuBarInfo", stringID: "menuBarInfo", type: "hidden" },
						{ title: "newDocPresetJSON", stringID: "newDocPresetJSON", type: "hidden" },
						{ title: "newDocPresetMRUlist", stringID: "newDocPresetMRUlist", type: "hidden" },
						{ title: "overscrollMode", stringID: "overscrollMode", type: "hidden" },
						{ title: "pixelScaleFactorList", stringID: "pixelScaleFactorList", type: "hidden" },
						{ title: "recentFileEntries", stringID: "recentFileEntries", type: "hidden" },
						{ title: "recentlyUsedCCLibrariesTemplateElements", stringID: "recentlyUsedCCLibrariesTemplateElements", type: "hidden" },
						{ title: "springLoadedTools", stringID: "springLoadedTools", type: "hidden" },
						{ title: "springLoadedToolsTimingSensitivity", stringID: "springLoadedToolsTimingSensitivity", type: "hidden" },

						// first party
						{ title: "customPreference", stringID: "customPreference", type: "1st" },
						{ title: "executablePath", stringID: "executablePath", type: "1st" },
						{ title: "generatorStatus", stringID: "generatorStatus", type: "1st" },
						{ title: "path", stringID: "path", type: "1st" },
						{ title: "quickTimeInstalled", stringID: "quickTimeInstalled", type: "1st" },
						{ title: "serialString", stringID: "serialString", type: "1st" },
						{ title: "systemInfo", stringID: "systemInfo", type: "1st" },
						{ title: "designSpaceLibrariesInfo", stringID: "designSpaceLibrariesInfo", type: "1st" },
					],
				},
				{
					type: "history",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "ID", stringID: "ID", type: "default" },
						{ title: "auto", stringID: "auto", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "currentHistoryState", stringID: "currentHistoryState", type: "default" },
						{ title: "historyBrushSource", stringID: "historyBrushSource", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "name", stringID: "name", type: "default" },
					],
				},
				{
					type: "snapshot",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "ID", stringID: "ID", type: "default" },
						{ title: "auto", stringID: "auto", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "currentHistoryState", stringID: "currentHistoryState", type: "default" },
						{ title: "historyBrushSource", stringID: "historyBrushSource", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "name", stringID: "name", type: "default" },
					],
				},
				{
					type: "layer",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "background", stringID: "background", type: "default" },
						{ title: "bounds", stringID: "bounds", type: "default" },
						{ title: "boundsNoEffects", stringID: "boundsNoEffects", type: "default" },
						{ title: "boundsNoMask", stringID: "boundsNoMask", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "fillOpacity", stringID: "fillOpacity", type: "default" },
						{ title: "globalAngle", stringID: "globalAngle", type: "default" },
						{ title: "group", stringID: "group", type: "default" }, // clipped
						{ title: "hasUserMask", stringID: "hasUserMask", type: "default" },
						{ title: "hasVectorMask", stringID: "hasVectorMask", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "layerFXVisible", stringID: "layerFXVisible", type: "default" },
						{ title: "layerID", stringID: "layerID", type: "default" },
						{ title: "layerKind", stringID: "layerKind", type: "default" },
						{ title: "layerLocking", stringID: "layerLocking", type: "default" },
						{ title: "layerSection", stringID: "layerSection", type: "default" },
						{ title: "mode", stringID: "mode", type: "default" }, // blend mode
						{ title: "name", stringID: "name", type: "default" },
						{ title: "opacity", stringID: "opacity", type: "default" },
						{ title: "targetChannels", stringID: "targetChannels", type: "default" },
						{ title: "visible", stringID: "visible", type: "default" },
						{ title: "visibleChannels", stringID: "visibleChannels", type: "default" },
						//optional
						{ title: "adjustment", stringID: "adjustment", type: "optional" },
						{ title: "artboard", stringID: "artboard", type: "optional" },
						{ title: "artboardEnabled", stringID: "artboardEnabled", type: "optional" },
						{ title: "boundingBox", stringID: "boundingBox", type: "optional" },
						{ title: "color", stringID: "color", type: "optional" },
						{ title: "fillEnabled", stringID: "fillEnabled", type: "optional" },
						{ title: "filterMaskDensity", stringID: "filterMaskDensity", type: "optional" },
						{ title: "filterMaskFeather", stringID: "filterMaskFeather", type: "optional" },
						{ title: "keyOriginType", stringID: "keyOriginType", type: "optional" },
						{ title: "layer3D", stringID: "layer3D", type: "optional" },
						{ title: "layerEffects", stringID: "layerEffects", type: "optional" },
						{ title: "layerSectionExpanded", stringID: "layerSectionExpanded", type: "optional" },
						{ title: "layerTransformation", stringID: "layerTransformation", type: "optional" },
						{ title: "linkedLayerIDs", stringID: "linkedLayerIDs", type: "optional" },
						{ title: "parentLayerID", stringID: "parentLayerID", type: "optional" },
						{ title: "selection", stringID: "selection", type: "optional" },
						{ title: "smartObject", stringID: "smartObject", type: "optional" },
						{ title: "smartObjectMore", stringID: "smartObjectMore", type: "optional" },
						{ title: "text", stringID: "text", type: "optional" },
						{ title: "textKey", stringID: "textKey", type: "optional" },
						{ title: "textWarningLevel", stringID: "textWarningLevel", type: "optional" },
						{ title: "useAlignedRendering", stringID: "useAlignedRendering", type: "optional" },
						{ title: "userMaskDensity", stringID: "userMaskDensity", type: "optional" },
						{ title: "userMaskEnabled", stringID: "userMaskEnabled", type: "optional" },
						{ title: "userMaskFeather", stringID: "userMaskFeather", type: "optional" },
						{ title: "userMaskLinked", stringID: "userMaskLinked", type: "optional" },
						{ title: "vectorMaskDensity", stringID: "vectorMaskDensity", type: "optional" },
						{ title: "vectorMaskEmpty", stringID: "vectorMaskEmpty", type: "optional" },
						{ title: "vectorMaskEnabled", stringID: "vectorMaskEnabled", type: "optional" },
						{ title: "vectorMaskFeather", stringID: "vectorMaskFeather", type: "optional" },
						//hidden
						{ title: "AGMokeStyleInfo", stringID: "AGMokeStyleInfo", type: "hidden" },
						{ title: "AGMStrokeStyleInfo", stringID: "AGMStrokeStyleInfo", type: "hidden" },
						{ title: "animationProtection", stringID: "animationProtection", type: "hidden" },
						{ title: "channelRestrictions", stringID: "channelRestrictions", type: "hidden" },
						{ title: "generatorSettings", stringID: "generatorSettings", type: "hidden" },
						{ title: "hasFilterMask", stringID: "hasFilterMask", type: "hidden" },
						{ title: "json", stringID: "json", type: "hidden" },
						{ title: "layerPathComponentCount", stringID: "layerPathComponentCount", type: "hidden" },
						{ title: "layerSVGdata", stringID: "layerSVGdata", type: "hidden" },
						{ title: "layerVectorPointData", stringID: "layerVectorPointData", type: "hidden" },
						{ title: "metadata", stringID: "metadata", type: "hidden" },
						{ title: "pathBounds", stringID: "pathBounds", type: "hidden" },
						{ title: "preserveTransparency", stringID: "preserveTransparency", type: "hidden" },
						{ title: "proportionalScaling", stringID: "proportionalScaling", type: "hidden" },
						{ title: "videoLayer", stringID: "videoLayer", type: "hidden" },
						{ title: "XMPMetadataAsUTF8", stringID: "XMPMetadataAsUTF8", type: "hidden" },
					],
				},
				{
					type: "path",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "AGMStrokeStyleInfo", stringID: "AGMStrokeStyleInfo", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "flatness", stringID: "flatness", type: "default" },
						{ title: "ID", stringID: "ID", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "kind", stringID: "kind", type: "default" },
						{ title: "pathContents", stringID: "pathContents", type: "default" },
						{ title: "pathName", stringID: "pathName", type: "default" },
						{ title: "symmetryPath", stringID: "symmetryPath", type: "default" },
						{ title: "targetPath", stringID: "targetPath", type: "default" },
					],
				},
				{
					type: "channel",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "ID", stringID: "ID", type: "default" },
						{ title: "alphaChannelOptions", stringID: "alphaChannelOptions", type: "default" },
						{ title: "channelName", stringID: "channelName", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "histogram", stringID: "histogram", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "visible", stringID: "visible", type: "default" },
					],
				},
				{
					type: "document",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "bigNudgeH", stringID: "bigNudgeH", type: "default" },
						{ title: "bigNudgeV", stringID: "bigNudgeV", type: "default" },
						{ title: "center", stringID: "center", type: "default" },
						{ title: "clippingPathInfo", stringID: "clippingPathInfo", type: "default" },
						{ title: "cloudDocument", stringID: "cloudDocument", type: "default" },
						{ title: "compositor", stringID: "compositor", type: "default" },
						{ title: "copyright", stringID: "copyright", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "depth", stringID: "depth", type: "default" },
						{ title: "documentID", stringID: "documentID", type: "default" },
						{ title: "fileInfo", stringID: "fileInfo", type: "default" },
						{ title: "generatorSettings", stringID: "generatorSettings", type: "default" },
						{ title: "guidesVisibility", stringID: "guidesVisibility", type: "default" },
						{ title: "hasBackgroundLayer", stringID: "hasBackgroundLayer", type: "default" },
						{ title: "height", stringID: "height", type: "default" },
						{ title: "histogram", stringID: "histogram", type: "default" },
						{ title: "homeScreenReady", stringID: "homeScreenReady", type: "default" },
						{ title: "isCloudDoc", stringID: "isCloudDoc", type: "default" },
						{ title: "isDirty", stringID: "isDirty", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "manage", stringID: "manage", type: "default" },
						{ title: "measurementScale", stringID: "measurementScale", type: "default" },
						{ title: "mode", stringID: "mode", type: "default" },
						{ title: "numberOfChannels", stringID: "numberOfChannels", type: "default" },
						{ title: "numberOfLayers", stringID: "numberOfLayers", type: "default" },
						{ title: "numberOfPaths", stringID: "numberOfPaths", type: "default" },
						{ title: "overscrollMode", stringID: "overscrollMode", type: "default" },
						{ title: "pixelScaleFactor", stringID: "pixelScaleFactor", type: "default" },
						{ title: "printColorHandling", stringID: "printColorHandling", type: "default" },
						{ title: "printCopies", stringID: "printCopies", type: "default" },
						{ title: "printCurrentPrinter", stringID: "printCurrentPrinter", type: "default" },
						{ title: "printerList", stringID: "printerList", type: "default" },
						{ title: "printOutput", stringID: "printOutput", type: "default" },
						{ title: "printOutputOptions", stringID: "printOutputOptions", type: "default" },
						{ title: "profile", stringID: "profile", type: "default" },
						{ title: "quickMask", stringID: "quickMask", type: "default" },
						{ title: "resolution", stringID: "resolution", type: "default" },
						{ title: "rulerOriginH", stringID: "rulerOriginH", type: "default" },
						{ title: "rulerOriginV", stringID: "rulerOriginV", type: "default" },
						{ title: "rulersVisibility", stringID: "rulersVisibility", type: "default" },
						{ title: "slices", stringID: "slices", type: "default" },
						{ title: "smartGuidesVisibility", stringID: "smartGuidesVisibility", type: "default" },
						{ title: "targetLayers", stringID: "targetLayers", type: "default" },
						{ title: "targetLayersIDs", stringID: "targetLayersIDs", type: "default" },
						{ title: "targetLayersIndexes", stringID: "targetLayersIndexes", type: "default" },
						{ title: "targetPathIndex", stringID: "targetPathIndex", type: "default" },
						{ title: "targetPathsVisibility", stringID: "targetPathsVisibility", type: "default" },
						{ title: "targetPathVisibility", stringID: "targetPathVisibility", type: "default" },
						{ title: "title", stringID: "title", type: "default" },
						{ title: "viewInfo", stringID: "viewInfo", type: "default" },
						{ title: "visible", stringID: "visible", type: "default" },
						{ title: "watchSuspension", stringID: "watchSuspension", type: "default" },
						{ title: "watermark", stringID: "watermark", type: "default" },
						{ title: "width", stringID: "width", type: "default" },
						{ title: "workPathIndex", stringID: "workPathIndex", type: "default" },
						{ title: "XMPMetadataAsUTF8", stringID: "XMPMetadataAsUTF8", type: "default" },
						{ title: "zoom", stringID: "zoom", type: "default" },
						// optional
						{ title: "points", stringID: "points", type: "optional" },
						{ title: "EXIF", stringID: "EXIF", type: "optional" },
						{ title: "fileReference", stringID: "fileReference", type: "optional" },
						{ title: "format", stringID: "format", type: "optional" },
						{ title: "colorSamplerList", stringID: "colorSamplerList", type: "optional" },
						{ title: "compsList", stringID: "compsList", type: "optional" },
						{ title: "countClass", stringID: "countClass", type: "optional" },
						// hidden
						{ title: "artboards", stringID: "artboards", type: "hidden" },
						{ title: "globalAngle", stringID: "globalAngle", type: "hidden" },
						{ title: "json", stringID: "json", type: "hidden" },
						{ title: "numberOfGuides", stringID: "numberOfGuides", type: "hidden" },
						{ title: "pageSetup", stringID: "pageSetup", type: "hidden" },
						{ title: "printSettings", stringID: "printSettings", type: "hidden" },
						{ title: "rulerPoints", stringID: "rulerPoints", type: "hidden" },
						{ title: "selection", stringID: "selection", type: "hidden" },
						{ title: "slicesVisibility", stringID: "slicesVisibility", type: "hidden" },
						{ title: "viewTransform", stringID: "viewTransform", type: "hidden" },
					],
				},
				{
					type: "guide",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "ID", stringID: "ID", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "kind", stringID: "kind", type: "default" },
						{ title: "orientation", stringID: "orientation", type: "default" },
						{ title: "position", stringID: "position", type: "default" },
						{ title: "layerID", stringID: "layerID", type: "default" },
					],
				},
				{
					type: "action",
					list: [
						{ title: "(not specified)", stringID: "notSpecified"},
						{ title: "ID", stringID: "ID", type: "default" },
						{ title: "count", stringID: "count", type: "default" },
						{ title: "itemIndex", stringID: "itemIndex", type: "default" },
						{ title: "name", stringID: "name", type: "default" },
						{ title: "numberOfChildren", stringID: "numberOfChildren", type: "default" },
						{ title: "parentIndex", stringID: "parentIndex", type: "default" },
						{ title: "parentName", stringID: "parentName", type: "default" },
					],
				},
				{
					type: "timeline",
					list: [
						{ title: "enabled", stringID: "enabled", type: "default" },
						{ title: "hasMotion", stringID: "hasMotion", type: "default" },
						{ title: "time", stringID: "time", type: "default" },
						{ title: "currentFrame", stringID: "currentFrame", type: "default" },
						{ title: "duration", stringID: "duration", type: "default" },
						{ title: "frameCount", stringID: "frameCount", type: "default" },
						{ title: "frameRate", stringID: "frameRate", type: "default" },
						{ title: "documentTimelineSettings", stringID: "documentTimelineSettings", type: "default" },
						{ title: "workInTime", stringID: "workInTime", type: "default" },
						{ title: "workOutTime", stringID: "workOutTime", type: "default" },
					],
				},
				{
					type: "animationFrame",
					list: [
						{ title: "animationFrameDelay", stringID: "animationFrameDelay", type: "default" },
						{ title: "animationFrameReplace", stringID: "animationFrameReplace", type: "default" },
					],
				},
				{
					type: "animation",
					list: [
						{ title: "enabled", stringID: "enabled", type: "default" },
						{ title: "currentFrame", stringID: "currentFrame", type: "default" },
						{ title: "frameCount", stringID: "frameCount", type: "default" },
						{ title: "animationLoopCount", stringID: "animationLoopCount", type: "default" },
					],
				},
			],
			maximumItems: 150,
			leftColumnWidthPx: 300,
			rightColumnWidthPx: 220,
			initialDescriptorSettings: {
				supportRawDataType: false,
				dialogOptions: "dontDisplay",
				modalBehavior: null,
				synchronousExecution: null,
			},
			indent: "space3",
			singleQuotes: false,
			codeImports: "require",
			codeWrappers: "modal",

			hide_isCommand: true,
			hideDontRecord: true,
			hideForceNotify: true,
		},
		sorcerer: getSorInitialState(),
	};
}