export type Question = {
  id: string;
  category: string;
  japanese: string;
  naturalEnglish: string;
  examLikeEnglish: string;
  answer: boolean;
  explanationJa: string;
  explanationEn: string;
  difficulty: 1 | 2 | 3;
  tags: string[];
  isHazardPrediction?: boolean;
};

export type CategoryInfo = {
  name: string;
  japanese: string;
  description: string;
};

export const categories: CategoryInfo[] = [
  {
    name: "Traffic Rules",
    japanese: "交通ルール",
    description: "Basic road rules for safe riding.",
  },
  {
    name: "Traffic Signs",
    japanese: "道路標識",
    description: "Signs, signals, and road markings.",
  },
  {
    name: "Intersections",
    japanese: "交差点",
    description: "How to check, slow down, and proceed.",
  },
  {
    name: "Turning",
    japanese: "右左折",
    description: "Safe turning and lane position.",
  },
  {
    name: "Parking and Stopping",
    japanese: "駐停車",
    description: "Where stopping and parking are not allowed.",
  },
  {
    name: "Speed",
    japanese: "速度",
    description: "Speed limits and safe speed choices.",
  },
  {
    name: "Railroad Crossings",
    japanese: "踏切",
    description: "Stopping and checking before tracks.",
  },
  {
    name: "Helmet and Safety",
    japanese: "ヘルメットと安全",
    description: "Protective gear and safe habits.",
  },
  {
    name: "Two-step Right Turn",
    japanese: "二段階右折",
    description: "Rules for moped right turns.",
  },
  {
    name: "Hazard Prediction",
    japanese: "危険予測",
    description: "Spotting risks before they happen.",
  },
];

export const questions: Question[] = [
  {
    id: "traffic-rules-001",
    category: "Traffic Rules",
    japanese: "原動機付自転車を運転するときは、信号や道路標識に従わなければならない。",
    naturalEnglish:
      "When riding a moped, you must obey traffic lights and road signs.",
    examLikeEnglish:
      "A moped rider must obey traffic signals and road signs while riding.",
    answer: true,
    explanationJa:
      "信号や道路標識は、すべての車両が安全に通行するための基本的なルールです。",
    explanationEn:
      "Traffic lights and road signs are basic rules for all road users. Moped riders must follow them.",
    difficulty: 1,
    tags: ["signals", "signs", "basic"],
  },
  {
    id: "traffic-signs-001",
    category: "Traffic Signs",
    japanese:
      "一時停止の標識がある場所では、ほかの車が来ているときだけ止まればよい。",
    naturalEnglish:
      "At a stop sign, you only need to stop if another vehicle is coming.",
    examLikeEnglish:
      "At a place with a stop sign, a rider may continue without stopping when no vehicle is approaching.",
    answer: false,
    explanationJa:
      "一時停止の標識では、周囲の状況に関係なく停止線の直前で一時停止します。",
    explanationEn:
      "A stop sign always requires a complete stop, even when the road looks clear.",
    difficulty: 1,
    tags: ["stop-sign", "signs"],
  },
  {
    id: "intersections-001",
    category: "Intersections",
    japanese:
      "見通しの悪い交差点に入るときは、徐行して安全確認をする必要がある。",
    naturalEnglish:
      "When entering an intersection with poor visibility, you should slow down and check carefully.",
    examLikeEnglish:
      "A rider must slow down before entering an intersection where visibility is poor.",
    answer: true,
    explanationJa:
      "見通しの悪い交差点では、歩行者や車が突然出てくる可能性があります。",
    explanationEn:
      "Poor visibility makes it harder to notice pedestrians and vehicles, so slowing down is required.",
    difficulty: 1,
    tags: ["intersection", "slow-down", "visibility"],
  },
  {
    id: "turning-001",
    category: "Turning",
    japanese:
      "左折するときは、あらかじめ道路の左端に寄ってから曲がる。",
    naturalEnglish:
      "Before turning left, you should move close to the left edge of the road.",
    examLikeEnglish:
      "When turning left, a moped rider should move close to the left edge of the roadway in advance.",
    answer: true,
    explanationJa:
      "左折前に左側へ寄ることで、後続車や自転車との接触を防ぎやすくなります。",
    explanationEn:
      "Moving left before the turn helps others understand your path and reduces side-collision risk.",
    difficulty: 2,
    tags: ["left-turn", "lane-position"],
  },
  {
    id: "parking-001",
    category: "Parking and Stopping",
    japanese:
      "消火栓の近くでも、短時間であれば原付を駐車してよい。",
    naturalEnglish:
      "You may park near a fire hydrant if it is only for a short time.",
    examLikeEnglish:
      "Parking near a fire hydrant is permitted when the stop is brief.",
    answer: false,
    explanationJa:
      "消火活動の妨げになる場所では、短時間でも駐車してはいけません。",
    explanationEn:
      "Places needed for emergency work must be kept clear. A short stop does not make it allowed.",
    difficulty: 2,
    tags: ["parking", "fire-hydrant", "emergency"],
  },
  {
    id: "speed-001",
    category: "Speed",
    japanese:
      "交通の流れに合わせるためなら、原付でも制限速度を超えて走ってよい。",
    naturalEnglish:
      "A moped may go over the speed limit to keep up with traffic.",
    examLikeEnglish:
      "A moped rider may exceed the speed limit when doing so matches the flow of traffic.",
    answer: false,
    explanationJa:
      "交通の流れに関係なく、制限速度を超えてはいけません。",
    explanationEn:
      "The speed limit still applies even when other vehicles are moving faster.",
    difficulty: 1,
    tags: ["speed-limit", "flow-of-traffic"],
  },
  {
    id: "railroad-001",
    category: "Railroad Crossings",
    japanese:
      "踏切を通過する前には、停止して左右の安全を確認する。",
    naturalEnglish:
      "Before crossing railroad tracks, you must stop and check both directions.",
    examLikeEnglish:
      "Before passing through a railroad crossing, a rider must stop and confirm safety on both sides.",
    answer: true,
    explanationJa:
      "踏切では一時停止し、音と目で列車が来ていないことを確認します。",
    explanationEn:
      "At railroad crossings, stop first and check carefully by sight and sound.",
    difficulty: 1,
    tags: ["railroad", "stop", "safety-check"],
  },
  {
    id: "helmet-001",
    category: "Helmet and Safety",
    japanese:
      "交通量の少ない道であれば、原付の運転者はヘルメットを着用しなくてもよい。",
    naturalEnglish:
      "On quiet roads, a moped rider does not need to wear a helmet.",
    examLikeEnglish:
      "A moped rider is not required to wear a helmet when riding on a road with little traffic.",
    answer: false,
    explanationJa:
      "原付を運転するときは、道路の状況に関係なくヘルメットを着用します。",
    explanationEn:
      "Helmet use is required for moped riders regardless of how quiet the road is.",
    difficulty: 1,
    tags: ["helmet", "safety"],
  },
  {
    id: "two-step-right-turn-001",
    category: "Two-step Right Turn",
    japanese:
      "片側3車線以上の道路で右折するとき、原付は原則として二段階右折をする。",
    naturalEnglish:
      "On roads with three or more lanes in one direction, mopeds generally make a two-step right turn.",
    examLikeEnglish:
      "On a road with three or more lanes in the same direction, a moped should generally make a two-step right turn.",
    answer: true,
    explanationJa:
      "原付は大きな道路で右折するとき、原則として二段階右折が必要です。",
    explanationEn:
      "On wide multi-lane roads, mopeds generally use the two-step right turn method for safety.",
    difficulty: 3,
    tags: ["right-turn", "two-step", "multi-lane"],
  },
  {
    id: "hazard-001",
    category: "Hazard Prediction",
    japanese:
      "横断歩道の近くに歩行者がいるときは、青信号でも減速や停止の準備をする。",
    naturalEnglish:
      "If a pedestrian is near a crosswalk, you should be ready to slow down or stop even when the light is green.",
    examLikeEnglish:
      "When a pedestrian is near a crosswalk, a rider should prepare to slow down or stop even if the signal is green.",
    answer: true,
    explanationJa:
      "歩行者が急に横断を始める可能性があるため、先に危険を予測します。",
    explanationEn:
      "A pedestrian may start crossing unexpectedly, so you should predict the risk early.",
    difficulty: 2,
    tags: ["hazard-prediction", "crosswalk", "pedestrian"],
    isHazardPrediction: true,
  },
];

export const getCategoryQuestionCount = (categoryName: string) =>
  questions.filter((question) => question.category === categoryName).length;

export const getQuestionPoint = (question: Question) =>
  question.isHazardPrediction ? 2 : 1;
