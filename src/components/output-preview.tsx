import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type {
  EslintFormat,
  OutputFormat,
  OutputPreviewProps,
  PackageManager
} from '@/types';
import { Check, Copy, Download, Terminal } from 'lucide-react';
import { useState } from 'react';

export function OutputPreview({
  output,
  output_format,
  OnFormatChange,
  OnCopy,
  OnDownload,
  GenerateInstallCommand,
  GenerateEslintConfig
}: OutputPreviewProps) {
  const [copied_prettierrc, set_copied_prettierrc] = useState(false);
  const [copied_prettierignore, set_copied_prettierignore] = useState(false);
  const [copied_gitignore, set_copied_gitignore] = useState(false);
  const [copied_eslintrc, set_copied_eslintrc] = useState(false);
  const [copied_format_script, set_copied_format_script] = useState(false);
  const [copied_install, set_copied_install] = useState(false);
  const [package_manager, set_package_manager] =
    useState<PackageManager>('npm');
  const [eslint_format, set_eslint_format] = useState<EslintFormat>('flat');

  const HandleCopyPrettierrc = async () => {
    const success = await OnCopy(output.prettierrc);
    if (success) {
      set_copied_prettierrc(true);
      setTimeout(() => set_copied_prettierrc(false), 2000);
    }
  };

  const HandleCopyPrettierignore = async () => {
    const success = await OnCopy(output.prettierignore);
    if (success) {
      set_copied_prettierignore(true);
      setTimeout(() => set_copied_prettierignore(false), 2000);
    }
  };

  const HandleCopyInstall = async () => {
    const success = await OnCopy(GenerateInstallCommand(package_manager));
    if (success) {
      set_copied_install(true);
      setTimeout(() => set_copied_install(false), 2000);
    }
  };

  const HandleCopyGitignore = async () => {
    const success = await OnCopy(output.gitignore);
    if (success) {
      set_copied_gitignore(true);
      setTimeout(() => set_copied_gitignore(false), 2000);
    }
  };

  const HandleCopyEslintrc = async () => {
    const eslint_config = GenerateEslintConfig(eslint_format);
    const success = await OnCopy(eslint_config);
    if (success) {
      set_copied_eslintrc(true);
      setTimeout(() => set_copied_eslintrc(false), 2000);
    }
  };

  const HandleCopyFormatScript = async () => {
    const success = await OnCopy(output.format_script);
    if (success) {
      set_copied_format_script(true);
      setTimeout(() => set_copied_format_script(false), 2000);
    }
  };

  const GetPrettierrcFilename = () => {
    switch (output_format) {
      case 'json':
        return '.prettierrc';
      case 'yaml':
        return '.prettierrc.yaml';
      case 'js':
        return '.prettierrc.js';
      default:
        return '.prettierrc';
    }
  };

  const GetEslintrcFilename = () => {
    return eslint_format === 'flat' ? 'eslint.config.js' : '.eslintrc.json';
  };

  return (
    <Card>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-lg">
            <span>📄</span>
            Generated Files
          </CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Format:</span>
            <Select
              value={output_format}
              onValueChange={(value: OutputFormat) => OnFormatChange(value)}
            >
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="json">JSON</SelectItem>
                <SelectItem value="yaml">YAML</SelectItem>
                <SelectItem value="js">JS</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="install" className="w-full">
          <TabsList className="mb-3 flex h-auto w-full flex-wrap gap-2 p-1">
            <TabsTrigger value="install" className="gap-1.5 px-3 py-2">
              <Terminal className="h-3.5 w-3.5" />
              <span>Install</span>
            </TabsTrigger>
            <TabsTrigger value="eslintrc" className="px-3 py-2">
              <span className="font-mono text-xs">eslint</span>
            </TabsTrigger>
            <TabsTrigger value="prettierrc" className="px-3 py-2">
              <span className="font-mono text-xs">.prettierrc</span>
            </TabsTrigger>
            <TabsTrigger value="prettierignore" className="px-3 py-2">
              <span className="font-mono text-xs">ignore</span>
            </TabsTrigger>
            <TabsTrigger value="gitignore" className="px-3 py-2">
              <span className="font-mono text-xs">.gitignore</span>
            </TabsTrigger>
            <TabsTrigger value="format" className="px-3 py-2">
              <span className="font-mono text-xs">format</span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="install" className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <Select
                value={package_manager}
                onValueChange={(value: PackageManager) =>
                  set_package_manager(value)
                }
              >
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="npm">npm</SelectItem>
                  <SelectItem value="yarn">yarn</SelectItem>
                  <SelectItem value="pnpm">pnpm</SelectItem>
                  <SelectItem value="bun">bun</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={HandleCopyInstall}
              >
                {copied_install ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied_install ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <pre className="bg-muted overflow-auto rounded-lg p-4 font-mono text-sm">
              <code>{GenerateInstallCommand(package_manager)}</code>
            </pre>
            <p className="text-muted-foreground text-xs">
              รันคำสั่งนี้ใน terminal เพื่อติดตั้ง Prettier และ plugins
              ที่จำเป็น
            </p>
          </TabsContent>
          <TabsContent value="prettierrc" className="mt-4 space-y-3">
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={HandleCopyPrettierrc}
              >
                {copied_prettierrc ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied_prettierrc ? 'Copied!' : 'Copy'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={() =>
                  OnDownload(output.prettierrc, GetPrettierrcFilename())
                }
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
            <pre className="bg-muted max-h-80 overflow-auto rounded-lg p-4 font-mono text-sm">
              <code>
                {output.prettierrc ||
                  '// Select a framework to generate configuration'}
              </code>
            </pre>
          </TabsContent>
          <TabsContent value="eslintrc" className="mt-4 space-y-3">
            <div className="flex items-center justify-between">
              <Select
                value={eslint_format}
                onValueChange={(value: EslintFormat) =>
                  set_eslint_format(value)
                }
              >
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="flat">Flat Config</SelectItem>
                  <SelectItem value="legacy">Legacy</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={HandleCopyEslintrc}
                >
                  {copied_eslintrc ? (
                    <Check className="h-4 w-4 text-green-500" />
                  ) : (
                    <Copy className="h-4 w-4" />
                  )}
                  {copied_eslintrc ? 'Copied!' : 'Copy'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() =>
                    OnDownload(
                      GenerateEslintConfig(eslint_format),
                      GetEslintrcFilename()
                    )
                  }
                >
                  <Download className="h-4 w-4" />
                  Download
                </Button>
              </div>
            </div>
            <pre className="bg-muted max-h-80 overflow-auto rounded-lg p-4 font-mono text-sm">
              <code>
                {GenerateEslintConfig(eslint_format) ||
                  '// Select a framework to generate ESLint configuration'}
              </code>
            </pre>
          </TabsContent>
          <TabsContent value="prettierignore" className="mt-4 space-y-3">
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={HandleCopyPrettierignore}
              >
                {copied_prettierignore ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied_prettierignore ? 'Copied!' : 'Copy'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={() =>
                  OnDownload(output.prettierignore, '.prettierignore')
                }
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
            <pre className="bg-muted max-h-80 overflow-auto rounded-lg p-4 font-mono text-sm">
              <code>
                {output.prettierignore ||
                  '# Select a framework to generate ignore patterns'}
              </code>
            </pre>
          </TabsContent>
          <TabsContent value="gitignore" className="mt-4 space-y-3">
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={HandleCopyGitignore}
              >
                {copied_gitignore ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied_gitignore ? 'Copied!' : 'Copy'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={() => OnDownload(output.gitignore, '.gitignore')}
              >
                <Download className="h-4 w-4" />
                Download
              </Button>
            </div>
            <pre className="bg-muted max-h-80 overflow-auto rounded-lg p-4 font-mono text-sm">
              <code>
                {output.gitignore ||
                  '# Select a framework to generate gitignore'}
              </code>
            </pre>
          </TabsContent>
          <TabsContent value="format" className="mt-4 space-y-3">
            <div className="flex justify-end gap-2">
              <Button
                variant="outline"
                size="sm"
                className="gap-1.5"
                onClick={HandleCopyFormatScript}
              >
                {copied_format_script ? (
                  <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                {copied_format_script ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            <pre className="bg-muted overflow-auto rounded-lg p-4 font-mono text-sm">
              <code>
                {output.format_script ||
                  '// Select a framework to generate format script'}
              </code>
            </pre>
            <p className="text-muted-foreground text-xs">
              เพิ่ม script นี้ใน package.json เพื่อ format โค้ดด้วย Prettier
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
