// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	// Frontend Skills（保留前端核心，贴合游戏官网/工具开发）
	{
		id: "javascript",
		name: "JavaScript",
		description:
			"精通现代JavaScript开发，熟练运用ES6+语法、异步编程与模块化开发，既支撑前端业务开发，也用于游戏配套工具/官网的逻辑实现。",
		icon: "logos:javascript",
		category: "frontend",
		level: "advanced",
		experience: { years: 3, months: 6 },
		projects: ["mizuki-blog", "game-website", "game-admin-tool"],
		color: "#F7DF1E",
	},
	{
		id: "typescript",
		name: "TypeScript",
		description:
			"以TypeScript构建强类型代码体系，大幅提升前端项目与游戏配置工具的可维护性，熟练结合TS实现复杂业务逻辑与类型约束。",
		icon: "logos:typescript-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 8 },
		projects: ["mizuki-blog", "game-website", "unity-config-tool"],
		color: "#3178C6",
	},
	{
		id: "react",
		name: "React",
		description:
			"熟练使用React生态构建高性能前端应用，包括Hooks、Context状态管理等核心能力，主导游戏官网、后台管理系统的前端开发。",
		icon: "logos:react",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 10 },
		projects: ["game-website", "game-admin-tool"],
		color: "#61DAFB",
	},
	{
		id: "astro",
		name: "Astro",
		description:
			"基于Astro构建高性能静态站点，兼顾多框架集成与极致性能，完成个人博客及游戏官网的开发与部署，优化首屏加载体验。",
		icon: "logos:astro-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 1, months: 2 },
		projects: ["mizuki-blog", "game-website"],
		color: "#FF5D01",
	},
	{
		id: "tailwindcss",
		name: "Tailwind CSS",
		description:
			"精通原子化CSS框架Tailwind，快速实现响应式布局与个性化样式，高效完成游戏官网、管理后台的UI开发，兼顾美观与开发效率。",
		icon: "logos:tailwindcss-icon",
		category: "frontend",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["mizuki-blog", "game-website"],
		color: "#06B6D4",
	},
	{
		id: "vite",
		name: "Vite",
		description:
			"基于Vite搭建前端工程化体系，替代传统打包工具，大幅提升游戏配套前端项目的开发效率与热更新体验，定制化配置构建流程。",
		icon: "logos:vitejs",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["game-admin-tool", "unity-config-tool"],
		color: "#646CFF",
	},

	// Backend Skills（聚焦游戏开发核心后端/语言）
	{
		id: "csharp",
		name: "C#",
		description:
			"Unity游戏开发核心语言，精通C#面向对象编程、委托/事件、泛型等特性，主导动作肉鸽游戏的核心逻辑、战斗系统、AI行为树开发。",
		icon: "devicon:csharp",
		category: "backend",
		level: "expert",
		experience: { years: 2, months: 6 },
		projects: ["game-demo", "roguelike-core-system"],
		color: "#239120",
	},
	{
		id: "nodejs",
		name: "Node.js",
		description:
			"基于Node.js搭建轻量级后端服务，实现游戏数据统计、玩家存档接口、官网接口等功能，兼顾性能与易用性。",
		icon: "logos:nodejs-icon",
		category: "backend",
		level: "intermediate",
		experience: { years: 2, months: 3 },
		projects: ["game-api-server", "game-data-analysis"],
		color: "#339933",
	},
	{
		id: "python",
		name: "Python",
		description:
			"运用Python编写游戏辅助工具，包括关卡配置解析、数据生成、自动化测试脚本等，提升游戏开发流程效率。",
		icon: "logos:python",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 10 },
		projects: ["game-data-tool", "level-generator"],
		color: "#3776AB",
	},
	{
		id: "express",
		name: "Express.js",
		description:
			"基于Express快速搭建游戏后端API服务，处理玩家数据、存档同步、排行榜等业务逻辑，适配Unity客户端请求。",
		icon: "simple-icons:express",
		category: "backend",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["game-api-server"],
		color: "#616161",
	},

	// Database Skills（游戏开发常用数据库）
	{
		id: "mysql",
		name: "MySQL",
		description:
			"精通MySQL数据库设计与优化，设计游戏玩家数据、存档、排行榜等表结构，编写高效SQL语句，保障数据存储与查询性能。",
		icon: "logos:mysql-icon",
		category: "database",
		level: "advanced",
		experience: { years: 2, months: 6 },
		projects: ["game-api-server", "game-data-analysis"],
		color: "#4479A1",
	},
	{
		id: "redis",
		name: "Redis",
		description:
			"运用Redis实现游戏高频数据缓存，包括玩家在线状态、排行榜实时更新、临时存档等，提升接口响应速度。",
		icon: "logos:redis",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 3 },
		projects: ["game-api-server", "game-ranking-system"],
		color: "#DC382D",
	},
	{
		id: "sqlite",
		name: "SQLite",
		description:
			"集成SQLite到Unity游戏客户端，实现本地存档、配置数据存储，适配单机游戏场景的数据持久化需求。",
		icon: "simple-icons:sqlite",
		category: "database",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["game-demo", "offline-save-system"],
		color: "#003B57",
	},

	// Tools（游戏+前端开发核心工具）
	{
		id: "git",
		name: "Git",
		description:
			"精通Git版本控制，主导游戏开发团队的代码管理、分支策略、合并规范，保障多人协作的代码安全性与可追溯性。",
		icon: "logos:git-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 3, months: 0 },
		color: "#F05032",
	},
	{
		id: "vscode",
		name: "VS Code",
		description:
			"主力开发编辑器，定制化配置前端+Unity开发环境，熟练运用插件提升编码效率，兼顾前端与C#开发需求。",
		icon: "logos:visual-studio-code",
		category: "tools",
		level: "expert",
		experience: { years: 3, months: 6 },
		color: "#007ACC",
	},
	{
		id: "rider",
		name: "Rider",
		description:
			"Unity官方推荐的C#开发IDE，熟练运用其智能提示、调试、重构功能，大幅提升游戏核心逻辑的开发效率。",
		icon: "logos:rider",
		category: "tools",
		level: "advanced",
		experience: { years: 1, months: 8 },
		projects: ["game-demo", "roguelike-core-system"],
		color: "#616161",
	},
	{
		id: "unity-editor",
		name: "Unity Editor",
		description:
			"精通Unity编辑器全流程使用，包括场景搭建、资源管理、组件开发、打包发布，主导动作肉鸽游戏的工程配置与调优。",
		icon: "logos:unity-icon",
		category: "tools",
		level: "advanced",
		experience: { years: 2, months: 8 },
		projects: ["game-demo", "roguelike-core-system"],
		color: "#00A8E8",
	},
	{
		id: "docker",
		name: "Docker",
		description:
			"运用Docker容器化部署游戏后端API、官网服务，统一开发与生产环境，简化部署流程，提升服务稳定性。",
		icon: "logos:docker-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 0 },
		projects: ["game-api-server", "game-website"],
		color: "#2496ED",
	},
	{
		id: "linux",
		name: "Linux",
		description:
			"熟练使用Linux系统进行服务器运维，部署游戏后端服务、配置环境、编写Shell脚本，保障服务稳定运行。",
		icon: "logos:linux-tux",
		category: "tools",
		level: "intermediate",
		experience: { years: 2, months: 0 },
		projects: ["game-api-server", "server-management"],
		color: "#FCC624",
	},
	{
		id: "postman",
		name: "Postman",
		description:
			"全流程使用Postman进行游戏API设计、测试、文档生成，保障前后端/客户端与服务端接口的一致性与可用性。",
		icon: "logos:postman-icon",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 8 },
		projects: ["game-api-server", "unity-api-test"],
		color: "#FF6C37",
	},
	{
		id: "figma",
		name: "Figma",
		description:
			"参与游戏UI/官网界面的原型设计与切图，配合美术团队完成界面迭代，将设计稿精准转化为前端/游戏UI实现。",
		icon: "logos:figma",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["game-website", "game-ui-prototype"],
		color: "#F24E1E",
	},

	// Other Skills（游戏开发核心拓展技能）
	{
		id: "unity-ugui",
		name: "Unity UGUI",
		description:
			"精通Unity UGUI系统，开发游戏内所有UI界面，包括战斗界面、背包系统、设置界面等，兼顾交互体验与性能优化。",
		icon: "material-symbols:ui-widgets",
		category: "other",
		level: "advanced",
		experience: { years: 2, months: 4 },
		projects: ["game-demo", "game-ui-system"],
		color: "#8B5CF6",
	},
	{
		id: "unity-dotween",
		name: "DOTween",
		description:
			"运用DOTween实现游戏内所有动效，包括UI过渡、角色动作、镜头动画等，提升游戏视觉体验与交互反馈。",
		icon: "material-symbols:animation",
		category: "other",
		level: "advanced",
		experience: { years: 2, months: 0 },
		projects: ["game-demo", "game-animation-system"],
		color: "#EC4899",
	},
	{
		id: "roguelike-design",
		name: "Roguelike游戏设计",
		description:
			"掌握动作肉鸽游戏核心设计逻辑，包括随机关卡生成、Build流派设计、数值平衡、Boss机制设计，主导游戏玩法迭代。",
		icon: "material-symbols:gamepad-variant",
		category: "other",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["game-demo", "roguelike-core-system"],
		color: "#10B981",
	},
	{
		id: "unity-scriptableobject",
		name: "ScriptableObject",
		description:
			"基于ScriptableObject设计游戏配置体系，实现技能、道具、敌人等数据的模块化管理，提升游戏可维护性。",
		icon: "material-symbols:data-object",
		category: "other",
		level: "advanced",
		experience: { years: 1, months: 10 },
		projects: ["game-demo", "game-config-system"],
		color: "#6366F1",
	},
];

// Get skill statistics
export const getSkillStats = () => {
	const total = skillsData.length;
	const byLevel = {
		beginner: skillsData.filter((s) => s.level === "beginner").length,
		intermediate: skillsData.filter((s) => s.level === "intermediate")
			.length,
		advanced: skillsData.filter((s) => s.level === "advanced").length,
		expert: skillsData.filter((s) => s.level === "expert").length,
	};
	const byCategory = {
		frontend: skillsData.filter((s) => s.category === "frontend").length,
		backend: skillsData.filter((s) => s.category === "backend").length,
		database: skillsData.filter((s) => s.category === "database").length,
		tools: skillsData.filter((s) => s.category === "tools").length,
		other: skillsData.filter((s) => s.category === "other").length,
	};

	return { total, byLevel, byCategory };
};

// Get skills by category
export const getSkillsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return skillsData;
	}
	return skillsData.filter((s) => s.category === category);
};

// Get advanced skills
export const getAdvancedSkills = () => {
	return skillsData.filter(
		(s) => s.level === "advanced" || s.level === "expert",
	);
};

// Calculate total years of experience
export const getTotalExperience = () => {
	const totalMonths = skillsData.reduce((total, skill) => {
		return total + skill.experience.years * 12 + skill.experience.months;
	}, 0);
	return {
		years: Math.floor(totalMonths / 12),
		months: totalMonths % 12,
	};
};