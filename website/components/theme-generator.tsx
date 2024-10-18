'use client'

import React, { useState, useEffect } from "react";
import { Sun, Moon, Save, Upload, Code, Download, Eye, Settings2, Palette, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const DEFAULT_THEME = {
  background: "#ffffff",
  foreground: "#000000",
  card: "#ffffff",
  cardForeground: "#000000",
  primary: "#2563eb",
  primaryForeground: "#ffffff",
  secondary: "#f1f5f9",
  secondaryForeground: "#0f172a",
  muted: "#f1f5f9",
  mutedForeground: "#64748b",
  accent: "#f8fafc",
  accentForeground: "#0f172a",
  destructive: "#ef4444",
  destructiveForeground: "#ffffff",
  border: "#e2e8f0",
  input: "#ffffff",
  ring: "#2563eb",
  radius: 0.5,
};

const THEME_PRESETS = {
  light: DEFAULT_THEME,
  dark: {
    ...DEFAULT_THEME,
    background: "#1a1a1a",
    foreground: "#ffffff",
    card: "#2a2a2a",
    cardForeground: "#ffffff",
    primary: "#3b82f6",
    secondary: "#334155",
    secondaryForeground: "#ffffff",
    muted: "#334155",
    mutedForeground: "#94a3b8",
    accent: "#1e293b",
    accentForeground: "#ffffff",
    border: "#334155",
    input: "#1e293b",
  },
  corporate: {
    ...DEFAULT_THEME,
    primary: "#0066cc",
    secondary: "#e6f0ff",
    accent: "#f0f7ff",
    radius: 0.375,
  }
};

interface ColorInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorInput = ({ label, value, onChange }: ColorInputProps) => (
  <div className="flex items-center space-x-4 p-2 rounded-lg hover:bg-gray-50 transition-colors">
    <Label className="w-1/3 capitalize text-sm font-medium text-gray-700">
      {label.replace(/([A-Z])/g, ' $1').trim()}
    </Label>
    <div className="flex-1">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-start text-left font-normal group"
          >
            <div
              className={`color-circle ${value.replace('#', 'bg-')}`}
            />
            <span className="text-gray-600">{value}</span>
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-72 p-4 bg-white border shadow-md">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="font-medium">Color</Label>
              <div
                className={`w-10 h-10 rounded-lg shadow-sm border border-gray-200 ${value.replace('#', 'bg-')}`}
              />
            </div>
            <Input
              type="color"
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="h-12 p-1 bg-white border-2 border-gray-200 rounded-lg"
            />
            <div className="flex items-center space-x-2">
              <Input
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className="font-mono"
                placeholder="#000000"
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  </div>
);

const ThemeGenerator = () => {
  const [theme, setTheme] = useState(DEFAULT_THEME);
  const [previewMode, setPreviewMode] = useState('light');
  const [savedThemes, setSavedThemes] = useState<Array<{name: string, theme: typeof DEFAULT_THEME}>>([]);

  useEffect(() => {
    const loaded = localStorage.getItem('savedThemes');
    if (loaded) {
      setSavedThemes(JSON.parse(loaded));
    }
  }, []);

  const showNotification = (message: string) => {
    alert(message); // Simple implementation using alert
  };
  
  const handleColorChange = (key: string, value: string) => {
    const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if (hexRegex.test(value)) {
      setTheme(prev => ({ ...prev, [key]: value }));
    }
  };

  const saveTheme = () => {
    const name = prompt('Enter a name for this theme:');
    if (name) {
      const newThemes = [...savedThemes, { name, theme }];
      setSavedThemes(newThemes);
      localStorage.setItem('savedThemes', JSON.stringify(newThemes));
      showNotification('Theme saved successfully!');
    }
  };

  const exportTheme = () => {
    const cssVariables = Object.entries(theme)
      .map(([key, value]) => `  --${key}: ${value};`)
      .join("\n");
    const fullCSS = `:root {\n${cssVariables}\n}`;
    
    const blob = new Blob([fullCSS], { type: "text/css" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "theme.css";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showNotification('Theme exported as CSS!');
  };

  const exportAsJson = () => {
      const blob = new Blob([JSON.stringify(theme, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = 'theme.json';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
      showNotification('Theme exported as JSON!');
    };

  const copyTailwindConfig = () => {
    const config = `module.exports = {
  theme: {
    extend: {
        primary: '${theme.primary}',
        secondary: '${theme.secondary}',
        background: '${theme.background}',
        foreground: '${theme.foreground}',
        muted: '${theme.muted}',
        accent: '${theme.accent}',
        destructive: '${theme.destructive}',
      },
      borderRadius: {
        DEFAULT: '${theme.radius}rem',
      },
    },
  },
}`;
    navigator.clipboard.writeText(config);
    showNotification('Tailwind config copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-gray-50/50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <p className="text-gray-600">Customize your design system with ease</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Settings Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle>Theme Settings</CardTitle>
                    <CardDescription>Customize colors and properties</CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Select onValueChange={(preset: keyof typeof THEME_PRESETS) => setTheme(THEME_PRESETS[preset])}>
                      <SelectTrigger className="w-32">
                        <SelectValue placeholder="Presets" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="corporate">Corporate</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" onClick={() => setTheme(DEFAULT_THEME)}>
                      <RefreshCw className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="colors" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="colors" className="flex items-center gap-2">
                      <Palette className="w-4 h-4" />
                      Colors
                    </TabsTrigger>
                    <TabsTrigger value="properties" className="flex items-center gap-2">
                      <Settings2 className="w-4 h-4" />
                      Properties
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="colors" className="space-y-4">
                    {Object.entries(theme).map(([key, value]) => (
                      typeof value === 'string' && value.startsWith('#') && (
                        <ColorInput
                          key={key}
                          label={key}
                          value={value}
                          onChange={(newValue) => handleColorChange(key, newValue)}
                        />
                      )
                    ))}
                  </TabsContent>
                  
                  <TabsContent value="properties" className="space-y-6">
                    <div className="space-y-4">
                      <Label className="text-sm font-medium text-gray-700">Border Radius</Label>
                      <div className="flex items-center space-x-4">
                        <Slider
                          min={0}
                          max={2}
                          step={0.1}
                          value={[theme.radius]}
                          onValueChange={(value) => setTheme(prev => ({ ...prev, radius: value[0] }))}
                          className="flex-1"
                        />
                        <span className="w-16 text-right text-sm font-mono">
                          {theme.radius.toFixed(1)}rem
                        </span>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button onClick={saveTheme} className="flex items-center gap-2">
                <Save className="w-4 h-4" />
                Save Theme
              </Button>
              <Button onClick={exportTheme} className="flex items-center gap-2">
                <Download className="w-4 h-4" />
                Export CSS
              </Button>
              <Button onClick={exportAsJson} className="flex items-center gap-2">
                <Code className="w-4 h-4" />
                Export JSON
              </Button>
              <Button onClick={copyTailwindConfig} className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Copy Tailwind
              </Button>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <CardTitle className="flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Preview
                    </CardTitle>
                    <CardDescription>Live component preview</CardDescription>
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setPreviewMode(prev => prev === 'light' ? 'dark' : 'light')}
                  >
                    {previewMode === 'light' ? 
                      <Moon className="w-4 h-4" /> : 
                      <Sun className="w-4 h-4" />
                    }
                  </Button>
                </div>
              </CardHeader>
              <CardContent 
                className="space-y-8 transition-colors duration-200"
                style={{ 
                  backgroundColor: previewMode === 'dark' ? '#1a1a1a' : theme.card,
                  color: previewMode === 'dark' ? '#ffffff' : theme.cardForeground,
                  borderRadius: `${theme.radius}rem`
                }}
              >
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Buttons</h3>
                    <div className="flex flex-wrap gap-2">
                      <Button
                        style={{
                          backgroundColor: theme.primary,
                          color: theme.primaryForeground,
                          borderRadius: `${theme.radius}rem`
                        }}
                      >
                        Primary Button
                      </Button>
                      <Button
                        variant="outline"
                        style={{
                          borderColor: theme.border,
                          color: theme.primary,
                          borderRadius: `${theme.radius}rem`
                        }}
                      >
                        Secondary Button
                      </Button>
                      <Button
                        variant="destructive"
                        style={{
                          backgroundColor: theme.destructive,
                          color: theme.destructiveForeground,
                          borderRadius: `${theme.radius}rem`
                        }}
                      >
                        Destructive
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeGenerator;