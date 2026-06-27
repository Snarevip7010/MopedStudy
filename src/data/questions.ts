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
  {
    id: "traffic-signs-008",
    category: "Traffic Signs",
    japanese:
      "車両通行止めの標識がある道路では、原付も通行してはいけない。",
    naturalEnglish:
      "A moped must not use a road with a Closed to Vehicles sign.",
    examLikeEnglish:
      "A moped shall not proceed on a road where a Closed to Vehicles sign is displayed.",
    answer: true,
    explanationJa:
      "車両通行止めの標識は原付にも適用されます。",
    explanationEn:
      "A Closed to Vehicles sign applies to mopeds too.",
    difficulty: 1,
    tags: ["closed-to-vehicles", "signs"],
  },
  {
    id: "traffic-signs-009",
    category: "Traffic Signs",
    japanese:
      "追越し禁止の標識がある場所でも、前の車が遅ければ必ず追い越してよい。",
    naturalEnglish:
      "At a No Overtaking sign, you may always pass a slow vehicle.",
    examLikeEnglish:
      "Where a No Overtaking sign is posted, a moped may always overtake a slow vehicle.",
    answer: false,
    explanationJa:
      "追越し禁止の場所では、前の車が遅くても無理な追越しはできません。",
    explanationEn:
      "A slow vehicle does not cancel a No Overtaking sign.",
    difficulty: 2,
    tags: ["no-overtaking", "signs", "trick"],
  },
  {
    id: "traffic-signs-010",
    category: "Traffic Signs",
    japanese:
      "すべりやすい道路の警戒標識がある場所では、急なハンドルや急ブレーキを避ける。",
    naturalEnglish:
      "At a Slippery Road sign, avoid sudden steering and hard braking.",
    examLikeEnglish:
      "Where a Slippery Road warning sign is displayed, a rider should avoid sudden steering and sudden braking.",
    answer: true,
    explanationJa:
      "すべりやすい場所では、急な操作で転倒しやすくなります。",
    explanationEn:
      "Sudden actions can make the moped slip.",
    difficulty: 1,
    tags: ["slippery-road", "signs", "safe-speed"],
  },
  {
    id: "traffic-signs-011",
    category: "Traffic Signs",
    japanese:
      "指定方向外進行禁止の標識があっても、青信号なら好きな方向へ進んでよい。",
    naturalEnglish:
      "If the signal is green, you may go any direction even with a direction sign.",
    examLikeEnglish:
      "When the signal is green, a moped may proceed in any direction even if a mandatory direction sign is posted.",
    answer: false,
    explanationJa:
      "青信号でも、進行方向を指定する標識には従います。",
    explanationEn:
      "A green light does not override direction signs.",
    difficulty: 2,
    tags: ["direction-sign", "traffic-light", "signs"],
  },
  {
    id: "traffic-signs-012",
    category: "Traffic Signs",
    japanese:
      "学校や幼稚園などが近いことを示す標識がある場所では、子どもの飛び出しを予測する。",
    naturalEnglish:
      "Near a school warning sign, expect children to enter the road.",
    examLikeEnglish:
      "Where a school or children warning sign is displayed, a rider should anticipate children entering the roadway.",
    answer: true,
    explanationJa:
      "子どもは急に道路へ出てくることがあるため、注意して走ります。",
    explanationEn:
      "Children may move suddenly, so be ready to slow down.",
    difficulty: 1,
    tags: ["school-zone", "children", "signs"],
  },
  {
    id: "traffic-signs-013",
    category: "Traffic Signs",
    japanese:
      "一時停止の標識は、見通しがよい交差点では守らなくてもよい。",
    naturalEnglish:
      "You may ignore a Stop sign at an intersection with good visibility.",
    examLikeEnglish:
      "A Stop sign need not be obeyed when visibility at the intersection is good.",
    answer: false,
    explanationJa:
      "見通しがよくても、一時停止の標識があれば完全に停止します。",
    explanationEn:
      "A Stop sign requires a complete stop even when visibility is good.",
    difficulty: 1,
    tags: ["stop-sign", "signs", "trick"],
  },
  {
    id: "stop-slow-001",
    category: "Stop and Slow Down",
    japanese:
      "停止線がない一時停止の場所では、交差点の直前で停止する。",
    naturalEnglish:
      "If there is no stop line, stop just before the intersection.",
    examLikeEnglish:
      "At a stop location without a stop line, a rider shall stop immediately before entering the intersection.",
    answer: true,
    explanationJa:
      "停止線がないときは、交差点に入る直前で止まります。",
    explanationEn:
      "Without a stop line, stop before entering the intersection.",
    difficulty: 1,
    tags: ["stop-sign", "stop-line", "intersection"],
  },
  {
    id: "stop-slow-002",
    category: "Stop and Slow Down",
    japanese:
      "徐行とは、歩くくらいの速度なら必ずよいという意味である。",
    naturalEnglish:
      "Driving slowly always means any walking-speed pace is OK.",
    examLikeEnglish:
      "Slow driving always means that any speed similar to walking speed is sufficient.",
    answer: false,
    explanationJa:
      "徐行は、危険があればすぐ止まれる速度で進むことです。",
    explanationEn:
      "Slow driving means you can stop immediately if needed.",
    difficulty: 1,
    tags: ["slow-down", "safe-speed", "trick"],
  },
  {
    id: "stop-slow-003",
    category: "Stop and Slow Down",
    japanese:
      "歩道を横切って道路外の施設へ入るときは、歩道の直前で一時停止する。",
    naturalEnglish:
      "Before crossing a sidewalk to enter a place off the road, stop first.",
    examLikeEnglish:
      "When crossing a sidewalk to enter premises outside the road, a moped rider shall stop immediately before the sidewalk.",
    answer: true,
    explanationJa:
      "歩道を横切るときは、歩行者を妨げないよう一時停止します。",
    explanationEn:
      "Stop first and do not obstruct pedestrians on the sidewalk.",
    difficulty: 2,
    tags: ["sidewalk", "stop", "pedestrian"],
  },
  {
    id: "stop-slow-004",
    category: "Stop and Slow Down",
    japanese:
      "見通しの悪い曲がり角では、標識がなくても徐行して安全確認をする。",
    naturalEnglish:
      "At a blind corner, slow down and check even if there is no sign.",
    examLikeEnglish:
      "At a curve or corner with poor visibility, a rider should slow down and confirm safety even if no sign is posted.",
    answer: true,
    explanationJa:
      "見えにくい場所では、標識の有無にかかわらず危険を予測します。",
    explanationEn:
      "Poor visibility requires extra caution even without a sign.",
    difficulty: 2,
    tags: ["blind-corner", "slow-down", "visibility"],
  },
  {
    id: "stop-slow-005",
    category: "Stop and Slow Down",
    japanese:
      "一時停止の場所では、前の車が止まって進んだ直後なら自分は止まらなくてもよい。",
    naturalEnglish:
      "At a stop sign, you do not need to stop if the vehicle ahead already stopped.",
    examLikeEnglish:
      "At a designated stop location, a moped rider need not stop when the preceding vehicle has already stopped.",
    answer: false,
    explanationJa:
      "前の車が止まっていても、自分の原付も必ず一時停止します。",
    explanationEn:
      "Each rider must make their own complete stop.",
    difficulty: 1,
    tags: ["stop-sign", "following", "trick"],
  },
  {
    id: "pedestrian-001",
    category: "Pedestrian Protection",
    japanese:
      "横断歩道を渡っている歩行者がいるときは、その通行を妨げてはいけない。",
    naturalEnglish:
      "If a pedestrian is crossing at a crosswalk, you must not block them.",
    examLikeEnglish:
      "When a pedestrian is crossing at a crosswalk, a moped rider shall not obstruct the pedestrian's passage.",
    answer: true,
    explanationJa:
      "横断歩道では歩行者の安全を優先します。",
    explanationEn:
      "Pedestrians at a crosswalk have priority.",
    difficulty: 1,
    tags: ["crosswalk", "pedestrian", "priority"],
  },
  {
    id: "pedestrian-002",
    category: "Pedestrian Protection",
    japanese:
      "横断歩道の近くに歩行者がいても、まだ渡り始めていなければ速度を落とす必要はない。",
    naturalEnglish:
      "If a pedestrian near a crosswalk has not started crossing, you do not need to slow down.",
    examLikeEnglish:
      "A rider need not reduce speed near a crosswalk unless the pedestrian has already started crossing.",
    answer: false,
    explanationJa:
      "渡りそうな歩行者がいるときは、止まれるように注意して進みます。",
    explanationEn:
      "Be ready to stop when a pedestrian may cross.",
    difficulty: 2,
    tags: ["crosswalk", "pedestrian", "unless"],
  },
  {
    id: "pedestrian-003",
    category: "Pedestrian Protection",
    japanese:
      "歩行者に早く渡ってもらうために、警音器を鳴らして急がせてもよい。",
    naturalEnglish:
      "You may honk to make a pedestrian hurry across.",
    examLikeEnglish:
      "A rider may sound the horn to make a pedestrian hurry across the road.",
    answer: false,
    explanationJa:
      "警音器で歩行者を急がせるのは危険です。歩行者を保護します。",
    explanationEn:
      "Do not pressure pedestrians. Protect them and wait.",
    difficulty: 1,
    tags: ["horn", "pedestrian", "crosswalk"],
  },
  {
    id: "pedestrian-004",
    category: "Pedestrian Protection",
    japanese:
      "歩行者の横を通るときは、安全な間隔をあけるか、徐行する。",
    naturalEnglish:
      "When passing a pedestrian, keep safe space or slow down.",
    examLikeEnglish:
      "When passing near pedestrians, a rider should keep a safe distance or proceed slowly.",
    answer: true,
    explanationJa:
      "歩行者のそばでは、接触しないよう安全な間隔と速度を保ちます。",
    explanationEn:
      "Space and low speed help prevent contact with pedestrians.",
    difficulty: 1,
    tags: ["pedestrian", "safe-distance", "slow-down"],
  },
  {
    id: "pedestrian-005",
    category: "Pedestrian Protection",
    japanese:
      "歩行者が横断歩道を渡り終えた後も、周囲に他の歩行者がいないか確認してから進む。",
    naturalEnglish:
      "After one pedestrian finishes crossing, check for others before moving.",
    examLikeEnglish:
      "After a pedestrian has completed crossing, a rider should confirm that no other pedestrian is about to cross before proceeding.",
    answer: true,
    explanationJa:
      "一人が渡り終えても、続いて渡る歩行者がいることがあります。",
    explanationEn:
      "Another pedestrian may start crossing right after.",
    difficulty: 2,
    tags: ["crosswalk", "pedestrian", "safety-check"],
  },
  {
    id: "parking-004",
    category: "Parking and Stopping",
    japanese:
      "横断歩道の上では、短時間の乗り降りだけなら停止してもよい。",
    naturalEnglish:
      "You may stop on a crosswalk for a quick pickup or drop-off.",
    examLikeEnglish:
      "Stopping on a crosswalk is permitted when it is only for a brief pickup or drop-off.",
    answer: false,
    explanationJa:
      "横断歩道上で止まると、歩行者の通行を妨げます。",
    explanationEn:
      "Stopping on a crosswalk blocks pedestrians.",
    difficulty: 1,
    tags: ["crosswalk", "no-stopping", "parking"],
  },
  {
    id: "parking-005",
    category: "Parking and Stopping",
    japanese:
      "踏切の中では、電話を確認する短い時間でも停止してはいけない。",
    naturalEnglish:
      "You must not stop inside a railroad crossing, even for a short phone check.",
    examLikeEnglish:
      "A moped shall not stop within a railroad crossing even if the stop is brief.",
    answer: true,
    explanationJa:
      "踏切内で停止すると、列車との事故につながる危険があります。",
    explanationEn:
      "Stopping on tracks is very dangerous.",
    difficulty: 1,
    tags: ["railroad", "no-stopping", "parking"],
  },
  {
    id: "parking-006",
    category: "Parking and Stopping",
    japanese:
      "消火栓の近くでも、エンジンをかけたままなら駐車してよい。",
    naturalEnglish:
      "Near a fire hydrant, parking is OK if the engine stays on.",
    examLikeEnglish:
      "Parking near a fire hydrant is permitted if the engine is kept running.",
    answer: false,
    explanationJa:
      "消火活動の妨げになる場所には、エンジンの状態に関係なく駐車できません。",
    explanationEn:
      "Emergency access must stay clear, even if the engine is on.",
    difficulty: 2,
    tags: ["fire-hydrant", "parking", "emergency"],
  },
  {
    id: "parking-007",
    category: "Parking and Stopping",
    japanese:
      "交差点の中やすぐ近くでは、交通を妨げるおそれがあるため駐停車してはいけない。",
    naturalEnglish:
      "Do not stop or park in or very near an intersection.",
    examLikeEnglish:
      "A moped shall not stop or park within or immediately near an intersection where traffic may be obstructed.",
    answer: true,
    explanationJa:
      "交差点付近で止まると、見通しや通行の妨げになります。",
    explanationEn:
      "Stopping near intersections can block views and traffic.",
    difficulty: 2,
    tags: ["intersection", "no-stopping", "parking"],
  },
  {
    id: "parking-008",
    category: "Parking and Stopping",
    japanese:
      "駐車が認められる場所でも、他の車両や歩行者の通行を妨げないようにする。",
    naturalEnglish:
      "Even where parking is allowed, do not block vehicles or pedestrians.",
    examLikeEnglish:
      "Even at a place where parking is permitted, a rider should not obstruct vehicles or pedestrians.",
    answer: true,
    explanationJa:
      "駐車できる場所でも、周囲の交通を妨げないことが大切です。",
    explanationEn:
      "Allowed parking still must not obstruct traffic.",
    difficulty: 1,
    tags: ["parking", "pedestrian", "obstruction"],
  },
  {
    id: "two-step-right-turn-008",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折では、向きを変えた後は前方の信号に従って進む。",
    naturalEnglish:
      "In a two-step right turn, after changing direction, follow the signal in front of you.",
    examLikeEnglish:
      "In a two-step right turn, after changing direction, a moped rider shall proceed according to the signal facing the rider.",
    answer: true,
    explanationJa:
      "向きを変えた後は、新しく前方に見える信号に従います。",
    explanationEn:
      "After turning the moped, follow the signal now in front of you.",
    difficulty: 2,
    tags: ["two-step", "right-turn", "signal"],
  },
  {
    id: "two-step-right-turn-009",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折をするときは、右折レーンへ移らず左側から交差点を直進する。",
    naturalEnglish:
      "For a two-step right turn, do not move into the right-turn lane; go straight from the left side.",
    examLikeEnglish:
      "When making a two-step right turn, a moped should proceed straight from the left side without entering the right-turn lane.",
    answer: true,
    explanationJa:
      "二段階右折では、まず左側から交差点の向こう側へ直進します。",
    explanationEn:
      "The first step is to go straight from the left side.",
    difficulty: 2,
    tags: ["two-step", "right-turn-lane", "method"],
  },
  {
    id: "two-step-right-turn-010",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折が必要な交差点でも、車が少ないときは小回り右折をしてよい。",
    naturalEnglish:
      "Where a two-step right turn is required, you may turn directly if traffic is light.",
    examLikeEnglish:
      "At an intersection where a two-step right turn is required, a moped may make a direct right turn when traffic is light.",
    answer: false,
    explanationJa:
      "交通量が少なくても、二段階右折が必要な場所では二段階で右折します。",
    explanationEn:
      "Light traffic does not cancel a required two-step right turn.",
    difficulty: 3,
    tags: ["two-step", "direct-turn", "trick"],
  },
  {
    id: "two-step-right-turn-011",
    category: "Two-step Right Turn",
    japanese:
      "二段階右折で向きを変える場所では、他の交通の妨げにならない位置で停止する。",
    naturalEnglish:
      "When stopping to change direction in a two-step right turn, stop where you do not block traffic.",
    examLikeEnglish:
      "When stopping to change direction during a two-step right turn, a rider should stop at a position that does not obstruct other traffic.",
    answer: true,
    explanationJa:
      "向きを変えるために止まるときも、交差点内の通行を妨げないようにします。",
    explanationEn:
      "Stop for the second step without blocking others.",
    difficulty: 2,
    tags: ["two-step", "stop", "obstruction"],
  },
  {
    id: "hazard-007",
    category: "Hazard Prediction",
    japanese:
      "駐車車両の陰から歩行者が出てくることを予測して、間隔をあけて通行する。",
    naturalEnglish:
      "Expect pedestrians to appear from behind parked cars and keep space.",
    examLikeEnglish:
      "A rider should anticipate pedestrians emerging from behind parked vehicles and keep a safe distance.",
    answer: true,
    explanationJa:
      "駐車車両は歩行者を隠すことがあります。",
    explanationEn:
      "Parked vehicles can hide pedestrians.",
    difficulty: 2,
    tags: ["hazard-prediction", "parked-car", "pedestrian"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-008",
    category: "Hazard Prediction",
    japanese:
      "バス停付近では、バスの前後から人が出てくることを予測する。",
    naturalEnglish:
      "Near a bus stop, expect people to step out from around the bus.",
    examLikeEnglish:
      "Near a bus stop, a moped rider should anticipate pedestrians emerging from in front of or behind a bus.",
    answer: true,
    explanationJa:
      "バスの陰から乗客や歩行者が出てくることがあります。",
    explanationEn:
      "A bus can hide people who are about to cross.",
    difficulty: 2,
    tags: ["hazard-prediction", "bus-stop", "pedestrian"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-009",
    category: "Hazard Prediction",
    japanese:
      "濡れたマンホールや白線の上では、いつもと同じ強さでブレーキをかけても安全である。",
    naturalEnglish:
      "On wet manholes or painted lines, normal hard braking is always safe.",
    examLikeEnglish:
      "On wet manhole covers or road markings, hard braking is always safe if the rider is traveling slowly.",
    answer: false,
    explanationJa:
      "濡れた金属や白線はすべりやすく、転倒の危険があります。",
    explanationEn:
      "Wet metal and paint can be slippery.",
    difficulty: 2,
    tags: ["hazard-prediction", "wet-road", "braking"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-010",
    category: "Hazard Prediction",
    japanese:
      "夕方や雨の日は、周囲から見えにくくなるため早めにライトをつける。",
    naturalEnglish:
      "At dusk or in rain, turn on your light early so others can see you.",
    examLikeEnglish:
      "At dusk or in rain, a moped rider should use the light early to improve visibility to other road users.",
    answer: true,
    explanationJa:
      "見えにくい時間帯は、自分の存在を知らせることが大切です。",
    explanationEn:
      "Lights help others notice you earlier.",
    difficulty: 1,
    tags: ["hazard-prediction", "visibility", "light"],
    isHazardPrediction: true,
  },
  {
    id: "hazard-011",
    category: "Hazard Prediction",
    japanese:
      "大型車のすぐ後ろを走れば、前方の状況が見えなくても安全である。",
    naturalEnglish:
      "Following closely behind a large vehicle is safe even if you cannot see ahead.",
    examLikeEnglish:
      "A moped may follow closely behind a large vehicle even when the rider cannot see the road ahead.",
    answer: false,
    explanationJa:
      "大型車の後ろでは前方が見えにくく、急な危険に対応しにくくなります。",
    explanationEn:
      "A large vehicle can block your view and reduce reaction time.",
    difficulty: 2,
    tags: ["hazard-prediction", "large-vehicle", "following-distance"],
    isHazardPrediction: true,
  },
  {
    id: "railroad-006",
    category: "Railroad Crossings",
    japanese:
      "警報機が鳴っていなくても、踏切の手前では一時停止して安全確認をする。",
    naturalEnglish:
      "Even if the alarm is not sounding, stop and check before a railroad crossing.",
    examLikeEnglish:
      "Even if the railroad crossing alarm is not sounding, a rider shall stop and confirm safety before entering the crossing.",
    answer: true,
    explanationJa:
      "踏切では、警報の有無にかかわらず一時停止して確認します。",
    explanationEn:
      "Railroad crossings require a stop and safety check.",
    difficulty: 1,
    tags: ["railroad", "stop", "alarm"],
  },
  {
    id: "railroad-007",
    category: "Railroad Crossings",
    japanese:
      "踏切内で速度が落ちたときは、あわててギアを変えながら進むと安全である。",
    naturalEnglish:
      "If you slow down on the tracks, changing gears in a hurry is safe.",
    examLikeEnglish:
      "If speed decreases inside a railroad crossing, it is safe for a rider to change gears hurriedly while crossing.",
    answer: false,
    explanationJa:
      "踏切内では止まらないよう、入る前に安全に通過できる状態を整えます。",
    explanationEn:
      "Prepare before entering so you can cross smoothly.",
    difficulty: 2,
    tags: ["railroad", "control", "gear"],
  },
  {
    id: "railroad-008",
    category: "Railroad Crossings",
    japanese:
      "踏切内で遮断機が下がり始めた場合は、止まらず速やかに踏切の外へ出る。",
    naturalEnglish:
      "If the barrier starts lowering while you are on the crossing, leave the crossing quickly.",
    examLikeEnglish:
      "If the barrier begins to lower while a moped is within a railroad crossing, the rider should leave the crossing promptly.",
    answer: true,
    explanationJa:
      "踏切内にとどまるのは危険です。すみやかに外へ出ます。",
    explanationEn:
      "Do not remain on the tracks. Leave promptly.",
    difficulty: 2,
    tags: ["railroad", "barrier", "emergency"],
  },
  {
    id: "helmet-004",
    category: "Helmet and Safety",
    japanese:
      "短い距離だけ運転するときでも、原付ではヘルメットを正しく着用する。",
    naturalEnglish:
      "Even for a short ride, wear your helmet properly on a moped.",
    examLikeEnglish:
      "A moped rider shall wear a helmet properly even when traveling only a short distance.",
    answer: true,
    explanationJa:
      "短い距離でも事故の危険はあります。ヘルメットを着用します。",
    explanationEn:
      "Crashes can happen even on short trips.",
    difficulty: 1,
    tags: ["helmet", "short-distance", "safety"],
  },
  {
    id: "helmet-005",
    category: "Helmet and Safety",
    japanese:
      "ヘルメットが少し大きくても、頭に乗っていれば安全である。",
    naturalEnglish:
      "A loose helmet is safe as long as it is on your head.",
    examLikeEnglish:
      "A helmet that is loose is sufficient for safety if it is placed on the rider's head.",
    answer: false,
    explanationJa:
      "サイズが合わないヘルメットは、転倒時に外れるおそれがあります。",
    explanationEn:
      "A loose helmet may come off in a crash.",
    difficulty: 1,
    tags: ["helmet", "fit", "safety"],
  },
  {
    id: "helmet-006",
    category: "Helmet and Safety",
    japanese:
      "夜間は、ライトをつけて自分の存在を周囲に知らせる。",
    naturalEnglish:
      "At night, use your light so others can see you.",
    examLikeEnglish:
      "At night, a moped rider shall use the light so that the moped can be seen by other road users.",
    answer: true,
    explanationJa:
      "夜間は見えにくいため、ライトで自分の存在を知らせます。",
    explanationEn:
      "Lights improve your visibility at night.",
    difficulty: 1,
    tags: ["light", "night", "safety"],
  },
  {
    id: "speed-007",
    category: "Speed",
    japanese:
      "下り坂で交通の流れが速いときでも、原付は30km/hを超えて走ってはいけない。",
    naturalEnglish:
      "Even downhill with fast traffic, a moped must not go over 30 km/h.",
    examLikeEnglish:
      "Even on a downhill road where traffic is moving quickly, a moped shall not exceed 30 km/h.",
    answer: true,
    explanationJa:
      "下り坂や交通の流れに関係なく、原付の最高速度を守ります。",
    explanationEn:
      "The 30 km/h moped limit still applies.",
    difficulty: 1,
    tags: ["speed-limit", "30kmh", "downhill"],
  },
  {
    id: "speed-008",
    category: "Speed",
    japanese:
      "歩行者の多い場所では、制限速度内でもさらに速度を落とすことがある。",
    naturalEnglish:
      "In an area with many pedestrians, you may need to slow below the speed limit.",
    examLikeEnglish:
      "In an area with many pedestrians, a rider may need to reduce speed even when traveling within the speed limit.",
    answer: true,
    explanationJa:
      "制限速度内でも、周囲の状況に合わせた安全な速度が必要です。",
    explanationEn:
      "Safe speed depends on nearby pedestrians and road conditions.",
    difficulty: 1,
    tags: ["safe-speed", "pedestrian", "speed-limit"],
  },
  {
    id: "speed-009",
    category: "Speed",
    japanese:
      "試験会場に遅れそうなときは、短い距離だけなら速度超過してもよい。",
    naturalEnglish:
      "If you are late, you may speed for a short distance.",
    examLikeEnglish:
      "A moped rider may exceed the speed limit for a short distance when the rider is late.",
    answer: false,
    explanationJa:
      "急いでいる理由があっても、速度制限を超えてはいけません。",
    explanationEn:
      "Being late is not a reason to exceed the speed limit.",
    difficulty: 1,
    tags: ["speed-limit", "trick"],
  },
  {
    id: "speed-010",
    category: "Speed",
    japanese:
      "砂利道や濡れた道路では、同じ速度でも止まるまでの距離が長くなることがある。",
    naturalEnglish:
      "On gravel or wet roads, stopping distance can be longer at the same speed.",
    examLikeEnglish:
      "On gravel or wet roads, the stopping distance may become longer even at the same speed.",
    answer: true,
    explanationJa:
      "すべりやすい路面では制動距離が長くなるため、速度を落とします。",
    explanationEn:
      "Slippery surfaces can increase stopping distance.",
    difficulty: 2,
    tags: ["stopping-distance", "wet-road", "safe-speed"],
  },
];

export const getCategoryQuestionCount = (categoryName: string) =>
  questions.filter((question) =>
    categoryName === "Hazard Prediction"
      ? question.isHazardPrediction
      : question.category === categoryName,
  ).length;

export const getQuestionPoint = (question: Question) =>
  question.isHazardPrediction ? 2 : 1;
