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
    name: "Traffic Signs",
    japanese: "道路標識",
    description: "Signs, signals, and road markings.",
  },
  {
    name: "Stop and Slow Down",
    japanese: "一時停止と徐行",
    description: "Stop signs, slow zones, and places where extra caution is required.",
  },
  {
    name: "Traffic Lights",
    japanese: "信号",
    description: "Traffic signals, arrows, and signal-based decisions.",
  },
  {
    name: "Intersections",
    japanese: "交差点",
    description: "How to check, slow down, and proceed.",
  },
  {
    name: "Pedestrian Protection",
    japanese: "歩行者保護",
    description: "Crosswalks, children, and protecting pedestrians.",
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
    category: "Traffic Lights",
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
    category: "Stop and Slow Down",
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
    category: "Pedestrian Protection",
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
  {
    id: "traffic-rules-002",
    category: "Traffic Lights",
    japanese:
      "赤信号では、停止位置を越えずに停止しなければならない。",
    naturalEnglish:
      "At a red light, you must stop before the stopping point.",
    examLikeEnglish:
      "At a red traffic signal, a moped rider shall stop without passing the designated stopping position.",
    answer: true,
    explanationJa:
      "赤信号では、停止線などの手前で止まります。",
    explanationEn:
      "A red signal means stop before the stop line or stopping point.",
    difficulty: 1,
    tags: ["traffic-light", "red-light", "stop-line"],
  },
  {
    id: "traffic-rules-003",
    category: "Traffic Lights",
    japanese:
      "黄信号になったときは、交差点に近ければ必ず速度を上げて通過する。",
    naturalEnglish:
      "When the light turns yellow, you must always speed up if you are close to the intersection.",
    examLikeEnglish:
      "When the signal turns yellow, a rider must always accelerate and pass through if close to the intersection.",
    answer: false,
    explanationJa:
      "黄信号は原則として停止です。急停止が危険な場合だけ注意して進みます。",
    explanationEn:
      "Yellow generally means stop, unless stopping suddenly would be unsafe.",
    difficulty: 2,
    tags: ["traffic-light", "yellow-light", "trick"],
  },
  {
    id: "traffic-rules-004",
    category: "Traffic Lights",
    japanese:
      "青信号でも、交差点に入る前には歩行者や車の動きを確認する。",
    naturalEnglish:
      "Even at a green light, check pedestrians and vehicles before entering an intersection.",
    examLikeEnglish:
      "Even when the signal is green, a rider should confirm the movement of pedestrians and vehicles before entering an intersection.",
    answer: true,
    explanationJa:
      "青信号でも、交差点内の安全確認は必要です。",
    explanationEn:
      "Green does not remove the need to check for hazards.",
    difficulty: 1,
    tags: ["traffic-light", "green-light", "safety-check"],
  },
  {
    id: "traffic-signs-002",
    category: "Traffic Signs",
    japanese:
      "車両進入禁止の標識がある道路には、原付も進入してはいけない。",
    naturalEnglish:
      "A moped must not enter a road with a No Entry sign.",
    examLikeEnglish:
      "A moped is prohibited from entering a road marked with a No Entry sign.",
    answer: true,
    explanationJa:
      "車両進入禁止は原付にも適用されます。標識に従います。",
    explanationEn:
      "No Entry applies to mopeds too. Follow the sign.",
    difficulty: 1,
    tags: ["no-entry", "signs"],
  },
  {
    id: "traffic-signs-003",
    category: "Traffic Signs",
    japanese:
      "一方通行の標識がある道路では、原付は標識と反対方向に進んでもよい。",
    naturalEnglish:
      "On a one-way road, a moped may ride against the direction of the sign.",
    examLikeEnglish:
      "On a one-way road, a moped may proceed in the direction opposite to that indicated by the sign.",
    answer: false,
    explanationJa:
      "一方通行では、標識が示す方向にだけ進むことができます。",
    explanationEn:
      "On a one-way road, travel only in the allowed direction.",
    difficulty: 1,
    tags: ["one-way", "signs"],
  },
  {
    id: "traffic-signs-004",
    category: "Stop and Slow Down",
    japanese:
      "徐行の標識がある場所では、すぐに止まれる速度で進行する。",
    naturalEnglish:
      "At a Slow sign, ride slowly enough to stop right away.",
    examLikeEnglish:
      "Where a Slow sign is posted, a rider shall proceed at a speed that allows immediate stopping.",
    answer: true,
    explanationJa:
      "徐行は、危険があればすぐ止まれる速度で進むことです。",
    explanationEn:
      "Slow driving means you can stop immediately if needed.",
    difficulty: 1,
    tags: ["slow", "signs", "safety"],
  },
  {
    id: "traffic-signs-005",
    category: "Traffic Signs",
    japanese:
      "最高速度40km/hの標識がある道路では、原付も40km/hまで出してよい。",
    naturalEnglish:
      "If a sign says 40 km/h, a moped may ride up to 40 km/h.",
    examLikeEnglish:
      "Where a maximum speed sign indicates 40 km/h, a moped may be driven at 40 km/h.",
    answer: false,
    explanationJa:
      "原付の法定最高速度は30km/hです。標識が高くても30km/hを超えません。",
    explanationEn:
      "The moped limit is 30 km/h, even if a higher speed is posted.",
    difficulty: 2,
    tags: ["speed-sign", "speed-limit", "signs"],
  },
  {
    id: "traffic-signs-006",
    category: "Traffic Signs",
    japanese:
      "原付通行止めの標識がある道路では、原付は通行してはいけない。",
    naturalEnglish:
      "A moped must not use a road with a sign prohibiting mopeds.",
    examLikeEnglish:
      "A moped shall not travel on a road where a sign prohibits mopeds.",
    answer: true,
    explanationJa:
      "原付通行止めの標識がある場所では、原付は通行できません。",
    explanationEn:
      "If a sign bans mopeds, you must choose another route.",
    difficulty: 1,
    tags: ["moped-prohibited", "signs"],
  },
  {
    id: "traffic-signs-007",
    category: "Traffic Signs",
    japanese:
      "駐車禁止の標識がある場所では、短い時間なら駐車してもよい。",
    naturalEnglish:
      "At a No Parking sign, parking is OK if it is only for a short time.",
    examLikeEnglish:
      "Where a No Parking sign is posted, parking is permitted when the period is brief.",
    answer: false,
    explanationJa:
      "駐車禁止の場所では、短時間でも駐車してはいけません。",
    explanationEn:
      "No Parking means you must not park there, even briefly.",
    difficulty: 1,
    tags: ["no-parking", "signs", "parking"],
  },
  {
    id: "intersections-002",
    category: "Stop and Slow Down",
    japanese:
      "一時停止の標識がある交差点では、停止線の直前で完全に止まる。",
    naturalEnglish:
      "At a stop sign, stop completely before the stop line.",
    examLikeEnglish:
      "At an intersection with a Stop sign, a rider shall come to a complete stop immediately before the stop line.",
    answer: true,
    explanationJa:
      "一時停止は減速だけでは足りません。完全に止まります。",
    explanationEn:
      "Slowing down is not enough. You must fully stop.",
    difficulty: 1,
    tags: ["stop-sign", "stop-line", "intersection"],
  },
  {
    id: "intersections-003",
    category: "Stop and Slow Down",
    japanese:
      "一時停止の場所では、タイヤが少し動いていても安全確認をすれば停止したことになる。",
    naturalEnglish:
      "At a stop sign, rolling slowly counts as stopping if you check safety.",
    examLikeEnglish:
      "At a designated stop location, a rolling stop is sufficient if the rider confirms safety.",
    answer: false,
    explanationJa:
      "一時停止では、車輪を完全に止めて安全確認をします。",
    explanationEn:
      "A rolling stop is not a complete stop.",
    difficulty: 1,
    tags: ["stop-sign", "rolling-stop", "intersection"],
  },
  {
    id: "intersections-004",
    category: "Stop and Slow Down",
    japanese:
      "信号のない見通しの悪い交差点では、徐行して安全確認をする。",
    naturalEnglish:
      "At a blind intersection without signals, slow down and check carefully.",
    examLikeEnglish:
      "At an unsignalized intersection with poor visibility, a rider shall slow down and confirm safety.",
    answer: true,
    explanationJa:
      "見通しが悪い場所では、歩行者や車を発見しにくいため徐行します。",
    explanationEn:
      "Poor visibility makes hazards harder to see, so slow down.",
    difficulty: 2,
    tags: ["blind-intersection", "slow-down", "safety-check"],
  },
  {
    id: "intersections-005",
    category: "Intersections",
    japanese:
      "優先道路に入るときは、自分が原付なら他の車がよけてくれるので注意しなくてよい。",
    naturalEnglish:
      "When entering a priority road, a moped rider does not need to be careful because other vehicles will avoid them.",
    examLikeEnglish:
      "When entering a priority road, a moped rider need not pay special attention because other vehicles must avoid the moped.",
    answer: false,
    explanationJa:
      "優先道路に入るときは、他の交通を妨げないよう十分に確認します。",
    explanationEn:
      "Check carefully and do not obstruct traffic on the priority road.",
    difficulty: 2,
    tags: ["priority-road", "intersection", "safety-check"],
  },
  {
    id: "turning-002",
    category: "Turning",
    japanese:
      "右左折するときは、早めに合図を出して周囲に進路を知らせる。",
    naturalEnglish:
      "Before turning, signal early so others know where you will go.",
    examLikeEnglish:
      "When turning right or left, a rider shall signal in advance to indicate the intended direction.",
    answer: true,
    explanationJa:
      "合図は周囲に自分の動きを知らせ、事故を防ぐために必要です。",
    explanationEn:
      "Signals tell others your plan and help prevent crashes.",
    difficulty: 1,
    tags: ["signal", "turning"],
  },
  {
    id: "turning-003",
    category: "Turning",
    japanese:
      "左折するときは、大きく右にふくらんでから曲がると安全である。",
    naturalEnglish:
      "When turning left, it is safer to swing wide to the right first.",
    examLikeEnglish:
      "When making a left turn, a moped should first move widely to the right before turning.",
    answer: false,
    explanationJa:
      "左折前に右へふくらむと、後続車や自転車と接触する危険があります。",
    explanationEn:
      "Swinging wide can surprise others and cause a collision.",
    difficulty: 2,
    tags: ["left-turn", "lane-position"],
  },
  {
    id: "turning-004",
    category: "Pedestrian Protection",
    japanese:
      "左折時に横断中の歩行者がいる場合でも、原付が先に曲がってよい。",
    naturalEnglish:
      "When turning left, a moped may turn before pedestrians who are crossing.",
    examLikeEnglish:
      "When turning left, a moped may proceed before pedestrians who are crossing the road.",
    answer: false,
    explanationJa:
      "右左折時は、横断中の歩行者の通行を妨げてはいけません。",
    explanationEn:
      "Do not obstruct pedestrians when turning.",
    difficulty: 2,
    tags: ["left-turn", "pedestrian", "crosswalk"],
  },
  {
    id: "parking-002",
    category: "Parking and Stopping",
    japanese:
      "駐停車禁止の標識がある場所では、原付も停止や駐車をしてはいけない。",
    naturalEnglish:
      "A moped must not stop or park where stopping and parking are prohibited.",
    examLikeEnglish:
      "A moped shall not stop or park at a place where stopping and parking are prohibited by signs.",
    answer: true,
    explanationJa:
      "駐停車禁止は原付にも適用されます。標識に従います。",
    explanationEn:
      "No stopping or parking signs apply to mopeds too.",
    difficulty: 1,
    tags: ["no-stopping", "parking", "signs"],
  },
  {
    id: "parking-003",
    category: "Parking and Stopping",
    japanese:
      "交差点の中なら、交通の邪魔にならなければ原付を駐車してもよい。",
    naturalEnglish:
      "You may park a moped inside an intersection if it does not block traffic.",
    examLikeEnglish:
      "Parking a moped within an intersection is permitted when it does not obstruct traffic.",
    answer: false,
    explanationJa:
      "交差点やその付近は危険な場所なので、駐車してはいけません。",
    explanationEn:
      "Intersections are dangerous places to park.",
    difficulty: 2,
    tags: ["intersection", "parking"],
  },
  {
    id: "speed-002",
    category: "Speed",
    japanese:
      "原付の法定最高速度は30km/hである。",
    naturalEnglish:
      "The legal maximum speed for a moped is 30 km/h.",
    examLikeEnglish:
      "The statutory maximum speed for a moped is 30 km/h.",
    answer: true,
    explanationJa:
      "原付は、道路の流れに関係なく30km/hを超えてはいけません。",
    explanationEn:
      "A moped must not exceed 30 km/h.",
    difficulty: 1,
    tags: ["speed-limit", "30kmh"],
  },
  {
    id: "speed-003",
    category: "Speed",
    japanese:
      "道路が空いているときは、原付でも40km/hで走行してよい。",
    naturalEnglish:
      "If the road is empty, a moped may ride at 40 km/h.",
    examLikeEnglish:
      "A moped may be driven at 40 km/h when the road is clear and traffic is light.",
    answer: false,
    explanationJa:
      "道路が空いていても、原付は30km/hを超えてはいけません。",
    explanationEn:
      "The 30 km/h limit still applies on an empty road.",
    difficulty: 1,
    tags: ["speed-limit", "30kmh"],
  },
  {
    id: "speed-004",
    category: "Speed",
    japanese:
      "最高速度20km/hの標識がある道路では、原付は30km/hまで出してよい。",
    naturalEnglish:
      "If a sign says 20 km/h, a moped may still ride at 30 km/h.",
    examLikeEnglish:
      "Where a maximum speed sign indicates 20 km/h, a moped may nevertheless be driven at 30 km/h.",
    answer: false,
    explanationJa:
      "標識で20km/hと指定されている場合は、その速度に従います。",
    explanationEn:
      "When a lower posted speed is given, follow the lower speed.",
    difficulty: 2,
    tags: ["speed-sign", "speed-limit"],
  },
  {
    id: "speed-005",
    category: "Speed",
    japanese:
      "雨の日や見通しの悪い場所では、制限速度内でも安全な速度に落とす。",
    naturalEnglish:
      "In rain or poor visibility, slow down even if you are under the speed limit.",
    examLikeEnglish:
      "In rain or poor visibility, a rider should reduce speed even when traveling within the speed limit.",
    answer: true,
    explanationJa:
      "制限速度内でも、状況に応じて安全な速度で走る必要があります。",
    explanationEn:
      "The safe speed depends on road and weather conditions.",
    difficulty: 1,
    tags: ["safe-speed", "rain", "visibility"],
  },
  {
    id: "speed-006",
    category: "Speed",
    japanese:
      "下り坂では、エンジンを切っても速度を出しすぎなければ安全である。",
    naturalEnglish:
      "On a downhill road, turning off the engine is safe if you do not go too fast.",
    examLikeEnglish:
      "On a downhill road, it is safe to turn off the engine if excessive speed is avoided.",
    answer: false,
    explanationJa:
      "エンジンを切ると操作が不安定になり危険です。安全に制御できる状態で走ります。",
    explanationEn:
      "Keep the moped controllable. Do not coast in an unsafe way.",
    difficulty: 2,
    tags: ["downhill", "control", "safe-speed"],
  },
  {
    id: "railroad-002",
    category: "Railroad Crossings",
    japanese:
      "踏切では、停止後に目と耳で列車が来ていないか確認する。",
    naturalEnglish:
      "At a railroad crossing, stop and check with your eyes and ears.",
    examLikeEnglish:
      "At a railroad crossing, a rider shall stop and confirm by sight and sound that no train is approaching.",
    answer: true,
    explanationJa:
      "踏切では一時停止し、左右や警報音をよく確認します。",
    explanationEn:
      "Stop, look, and listen before crossing tracks.",
    difficulty: 1,
    tags: ["railroad", "stop", "look-listen"],
  },
  {
    id: "railroad-003",
    category: "Railroad Crossings",
    japanese:
      "警報機が鳴っていても、遮断機がまだ下りていなければ踏切に入ってよい。",
    naturalEnglish:
      "If the alarm is sounding but the barrier is not down yet, you may enter the crossing.",
    examLikeEnglish:
      "A rider may enter a railroad crossing while the alarm is sounding if the barrier has not yet lowered.",
    answer: false,
    explanationJa:
      "警報機が鳴っているときや遮断機が下り始めたときは、踏切に入ってはいけません。",
    explanationEn:
      "Do not enter when the alarm is sounding or the barrier is moving.",
    difficulty: 1,
    tags: ["railroad", "alarm", "barrier"],
  },
  {
    id: "railroad-004",
    category: "Railroad Crossings",
    japanese:
      "踏切の先が渋滞していて渡りきれないときは、踏切の手前で待つ。",
    naturalEnglish:
      "If traffic ahead is blocked, wait before the railroad crossing.",
    examLikeEnglish:
      "When the road beyond a railroad crossing is congested and crossing cannot be completed, a rider shall wait before the crossing.",
    answer: true,
    explanationJa:
      "踏切内で止まるおそれがあるときは、踏切に入ってはいけません。",
    explanationEn:
      "Do not enter if you may have to stop on the tracks.",
    difficulty: 2,
    tags: ["railroad", "traffic-jam", "safety"],
  },
  {
    id: "railroad-005",
    category: "Railroad Crossings",
    japanese:
      "前の車に続いて踏切に入るときは、一時停止を省略してよい。",
    naturalEnglish:
      "When following another vehicle into a railroad crossing, you may skip stopping.",
    examLikeEnglish:
      "When following the preceding vehicle through a railroad crossing, a rider need not stop again.",
    answer: false,
    explanationJa:
      "前の車に続く場合でも、踏切の手前で一時停止して安全確認をします。",
    explanationEn:
      "You still need to stop and check before the crossing.",
    difficulty: 2,
    tags: ["railroad", "stop", "following"],
  },
  {
    id: "helmet-002",
    category: "Helmet and Safety",
    japanese:
      "原付に乗るときは、あごひもをしっかり締めてヘルメットをかぶる。",
    naturalEnglish:
      "When riding a moped, wear your helmet with the chin strap fastened.",
    examLikeEnglish:
      "A moped rider shall wear a helmet properly with the chin strap securely fastened.",
    answer: true,
    explanationJa:
      "ヘルメットは正しく着用してこそ頭部を守る効果があります。",
    explanationEn:
      "A helmet protects you only when it is worn correctly.",
    difficulty: 1,
    tags: ["helmet", "chin-strap", "safety"],
  },
  {
    id: "helmet-003",
    category: "Helmet and Safety",
    japanese:
      "原付の後ろに人を乗せる場合、その人だけヘルメットをかぶればよい。",
    naturalEnglish:
      "If carrying a passenger on a moped, only the passenger needs a helmet.",
    examLikeEnglish:
      "When carrying a passenger on a moped, it is sufficient for only the passenger to wear a helmet.",
    answer: false,
    explanationJa:
      "普通の原付は二人乗りできません。運転者もヘルメットが必要です。",
    explanationEn:
      "Ordinary mopeds cannot carry passengers, and the rider must wear a helmet.",
    difficulty: 2,
    tags: ["helmet", "passenger", "two-person-riding"],
  },
  {
    id: "two-step-right-turn-002",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折では、まず交差点の向こう側まで直進し、そこで向きを変える。",
    naturalEnglish:
      "In a two-step right turn, first go straight across, then turn your direction.",
    examLikeEnglish:
      "In a two-step right turn, a moped first proceeds straight across the intersection and then changes direction.",
    answer: true,
    explanationJa:
      "二段階右折は、直進してから向きを変え、次の青信号で進みます。",
    explanationEn:
      "First cross straight, then turn and wait for the next green light.",
    difficulty: 2,
    tags: ["two-step", "right-turn", "method"],
  },
  {
    id: "two-step-right-turn-003",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折が必要な交差点でも、右折専用レーンに入って小回り右折をしてよい。",
    naturalEnglish:
      "Where a two-step right turn is required, a moped may use the right-turn lane and turn directly.",
    examLikeEnglish:
      "At an intersection where a two-step right turn is required, a moped may enter the right-turn lane and make a direct right turn.",
    answer: false,
    explanationJa:
      "二段階右折が必要な場所では、右折レーンに入らず二段階で右折します。",
    explanationEn:
      "Where two-step turning is required, do not make a direct right turn.",
    difficulty: 3,
    tags: ["two-step", "right-turn-lane", "direct-turn"],
  },
  {
    id: "two-step-right-turn-004",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折では、交差点に入る前に右折の合図を出す。",
    naturalEnglish:
      "For a two-step right turn, signal right before entering the intersection.",
    examLikeEnglish:
      "When making a two-step right turn, a moped rider shall signal right before entering the intersection.",
    answer: true,
    explanationJa:
      "右折の意思を周囲に知らせるため、前もって合図を出します。",
    explanationEn:
      "Signal so other road users know you intend to turn right.",
    difficulty: 2,
    tags: ["two-step", "signal", "right-turn"],
  },
  {
    id: "two-step-right-turn-005",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折で交差点の向こう側に着いたら、信号に関係なくすぐ右に進んでよい。",
    naturalEnglish:
      "After reaching the far side in a two-step right turn, you may go right immediately.",
    examLikeEnglish:
      "After reaching the far side of the intersection in a two-step right turn, a moped may proceed immediately regardless of the signal.",
    answer: false,
    explanationJa:
      "向きを変えた後は、前方の信号が青になるまで待ちます。",
    explanationEn:
      "After turning your direction, wait for the front signal to turn green.",
    difficulty: 2,
    tags: ["two-step", "signal", "right-turn"],
  },
  {
    id: "two-step-right-turn-006",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折をするときは、交差点の向こう側で停止して向きを変える。",
    naturalEnglish:
      "During a two-step right turn, stop on the far side and change your direction.",
    examLikeEnglish:
      "When making a two-step right turn, a rider shall stop at the far side of the intersection and change direction.",
    answer: true,
    explanationJa:
      "交差点を渡った地点で停止し、右に向きを変えて次の青信号を待ちます。",
    explanationEn:
      "Stop after crossing, turn the moped, and wait for the next green.",
    difficulty: 2,
    tags: ["two-step", "right-turn", "stop"],
  },
  {
    id: "two-step-right-turn-007",
    category: "Two-step Right Turn",
    japanese:
      "右矢印の青信号が出ていれば、二段階右折中の原付もその矢印で進んでよい。",
    naturalEnglish:
      "If a green right arrow is shown, a moped making a two-step right turn may follow that arrow.",
    examLikeEnglish:
      "When a green right-turn arrow is displayed, a moped making a two-step right turn may proceed in accordance with that arrow.",
    answer: false,
    explanationJa:
      "二段階右折の原付は、右矢印だけで進むのではなく、前方の青信号に従います。",
    explanationEn:
      "For a two-step right turn, follow the signal in front after changing direction.",
    difficulty: 3,
    tags: ["two-step", "right-arrow", "signal"],
  },
  {
    id: "hazard-002",
    category: "Pedestrian Protection",
    japanese:
      "横断歩道の手前で車が止まっているときは、その横を通る前に歩行者を予測して注意する。",
    naturalEnglish:
      "If a vehicle is stopped before a crosswalk, expect a pedestrian and be careful before passing.",
    examLikeEnglish:
      "When a vehicle is stopped immediately before a crosswalk, a rider should anticipate pedestrians before passing beside it.",
    answer: true,
    explanationJa:
      "止まっている車の陰から歩行者が出てくることがあります。",
    explanationEn:
      "A pedestrian may be hidden by the stopped vehicle.",
    difficulty: 2,
    tags: ["hazard-prediction", "crosswalk", "pedestrian"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-003",
    category: "Hazard Prediction",
    japanese:
      "子どもが道路脇にいるときでも、こちらを見ていなければ速度を落とす必要はない。",
    naturalEnglish:
      "If a child near the road is not looking at you, you do not need to slow down.",
    examLikeEnglish:
      "When a child is near the roadway, a rider need not reduce speed if the child is not looking at the rider.",
    answer: false,
    explanationJa:
      "子どもは急に飛び出すことがあります。早めに速度を落とします。",
    explanationEn:
      "Children may move suddenly, so slow down early.",
    difficulty: 2,
    tags: ["hazard-prediction", "children", "speed"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-004",
    category: "Hazard Prediction",
    japanese:
      "大型車の左側は見えにくいので、交差点付近で無理に並んで進んでもよい。",
    naturalEnglish:
      "Near an intersection, it is OK to ride beside the left side of a large vehicle.",
    examLikeEnglish:
      "Near an intersection, a moped may proceed alongside the left side of a large vehicle despite the limited visibility.",
    answer: false,
    explanationJa:
      "大型車の死角や巻き込みに注意し、無理に並走しません。",
    explanationEn:
      "Large vehicles have blind spots and may turn. Do not ride beside them carelessly.",
    difficulty: 3,
    tags: ["hazard-prediction", "large-vehicle", "blind-spot"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-005",
    category: "Hazard Prediction",
    japanese:
      "雨で路面がぬれていても、急ブレーキをかければ乾いた路面と同じ距離で止まれる。",
    naturalEnglish:
      "On a wet road, sudden braking stops a moped in the same distance as on a dry road.",
    examLikeEnglish:
      "On a wet road surface, a moped can stop within the same distance as on a dry road by braking suddenly.",
    answer: false,
    explanationJa:
      "ぬれた路面では滑りやすく、停止距離が長くなります。",
    explanationEn:
      "Wet roads are slippery and increase stopping distance.",
    difficulty: 2,
    tags: ["hazard-prediction", "rain", "braking"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-006",
    category: "Hazard Prediction",
    japanese:
      "駐車車両の横を通るときは、ドアが急に開くことはないので近くを通ってよい。",
    naturalEnglish:
      "When passing a parked car, you may ride close because the door will not open suddenly.",
    examLikeEnglish:
      "When passing a parked vehicle, a moped may proceed close to it because a door is unlikely to open suddenly.",
    answer: false,
    explanationJa:
      "駐車車両のドアが急に開くことがあります。間隔をあけて通ります。",
    explanationEn:
      "A door may open suddenly. Keep enough space.",
    difficulty: 2,
    tags: ["hazard-prediction", "parked-car", "door"],
    isHazardPrediction: true,
  },
];

export const getCategoryQuestionCount = (categoryName: string) =>
  questions.filter((question) => question.category === categoryName).length;

export const getQuestionPoint = (question: Question) =>
  question.isHazardPrediction ? 2 : 1;
