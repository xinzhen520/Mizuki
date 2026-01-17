// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "xinzhen-blog",
		title: "xinzhen Blog Theme",
		description:
			"Modern blog theme developed based on the Astro framework, supporting multilingual, dark mode, and responsive design features.",
		image: "",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind CSS", "Svelte"],
		status: "completed",
		liveDemo: "https://blog.example.com",
		sourceCode: "https://github.com/xinzhen520/Mizuki", // 更改为GitHub链接
		visitUrl: "https://blog.example.com", // 添加前往项目链接
		startDate: "2024-01-01",
		endDate: "2025-12-01",
		featured: true,
		tags: ["Blog", "Theme", "Open Source"],
	},
	{
		id: "game demo",
		title: "动作肉鸽小游戏Demo",
		description:
		  "作为独立开发团队主程，基于Unity引擎的动作肉鸽（Roguelike）小游戏Demo。融合流畅的即时战斗系统、随机生成的关卡地图与多流派Build玩法，支持多武器差异化战斗、Boss专属机制设计，全程基于Unity生态完成游戏核心逻辑、物理碰撞、场景渲染与资源管理，目前处于持续迭代优化阶段。",
		image: "/images/projects/unity-roguelike-demo.webp", // 建议放游戏实机截图/UI设计图
		category: "desktop", // 游戏为Unity开发，选desktop（桌面端）/other（其他）均可
		techStack: ["Unity", "C#", "UGUI", "ScriptableObject", "Addressables", "DOTween"], // 核心Unity技术栈
		status: "in-progress", // 开发中状态（完成后可改为completed）
		liveDemo: "", // 若有可运行的Demo包链接可填写，无则留空
		sourceCode: "", // 若开源可填仓库地址，独立游戏可留空
		visitUrl: "", // 若有游戏介绍页可填写，无则留空
		startDate: "2025-12-10", // 替换为实际开发启动日期
		// endDate: "", // 开发中状态无需填写，完成后补充
		featured: true, // 设为特色项目优先展示
		tags: ["动作肉鸽", "Unity开发", "独立游戏", "Roguelike", "C#", "游戏主程"],
	  },
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
