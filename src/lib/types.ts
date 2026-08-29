export interface Kpis {
  seguidores: number;
  seguidoresGrowthPct: number;
  engajamentoPct: number;
  engajamentoGrowthPct: number;
  publicacoes: number;
  publicacoesGrowthPct: number;
  profileScore: number;
  profileScoreLabel: string;
}

export interface GrowthPoint {
  date: string;
  value: number;
}

export interface ContentTypeSlice {
  label: string;
  value: number;
  color: string;
}

export interface ThemeItem {
  label: string;
  percent: number;
  color: string;
}

export interface MarketProfile {
  name: string;
  followers: number;
  growthPct: number;
}

export interface ContentItem {
  id: string;
  type: "Reel" | "Carrossel" | "Imagem";
  title: string;
  date: string;
  views: number;
  likes: number;
  comments: number;
  multiplier: number;
  permalink?: string;
}

export interface Person {
  name: string;
  role: string;
  score: number;
}

export interface Opportunity {
  name: string;
  type: "Empresa" | "Pessoa";
  score: number;
  note: string;
}

export interface DashboardData {
  source: "live" | "mock";
  fetchedAt: string;
  note?: string;
  profile: {
    username: string;
    name: string;
    bio: string;
  };
  kpis: Kpis;
  growth: GrowthPoint[];
  contentTypes: ContentTypeSlice[];
  themes: ThemeItem[];
  market: MarketProfile[];
  topContent: ContentItem[];
  people: Person[];
  opportunities: Opportunity[];
}
