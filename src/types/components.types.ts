import type {
  CommonIgnoreCategory,
  EslintFormat,
  OutputFormat,
  PackageManager
} from '@/types';
import type { GeneratedOutput, PrettierConfigState } from './builder.types';

export type PrettierConfigEditorProps = {
  config: PrettierConfigState;
  OnUpdate: <K extends keyof PrettierConfigState>(
    key: K,
    value: PrettierConfigState[K]
  ) => void;
};

export type IgnorePatternsEditorProps = {
  patterns: string[];
  custom_patterns: string[];
  OnToggle: (pattern: string) => void;
  OnAddCustom: (pattern: string) => void;
  OnRemoveCustom: (pattern: string) => void;
  OnAddCommonPatterns: (category: CommonIgnoreCategory) => void;
};

export type OutputPreviewProps = {
  output: GeneratedOutput;
  output_format: OutputFormat;
  OnFormatChange: (format: OutputFormat) => void;
  OnCopy: (text: string) => Promise<boolean>;
  GenerateInstallCommand: (package_manager: PackageManager) => string;
  GenerateEslintConfig: (format: EslintFormat) => string;
};

export type FrameworkSelectorProps = {
  selected_framework: string | null;
  OnSelect: (framework_id: string) => void;
};
