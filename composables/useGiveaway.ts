interface GiveawayDay {
  bannerText: string;
  giveawayId: string;
}

// Schedule runs from before June 2nd until June 15th
// Each giveaway starts at 12:00 AM on its designated day
const giveawaySchedule: GiveawayDay[] = [
  // Day 1 (Before June 2nd 12:00 AM)
  {
    bannerText: "Win Tickets to Center Street's Aqua Social - Day 1 of 14 Days of Joy!",
    giveawayId: "90877-yrnjoapt"
  },
  // Day 2 (June 2nd 12:00 AM - June 3rd 12:00 AM)
  {
    bannerText: "Win a 5-Class Pack by Full Circle Yoga - Day 2 of 14 Days of Joy!",
    giveawayId: "90931-acbg349i"
  },
  // Day 3 (June 3rd 12:00 AM - June 4th 12:00 AM)
  {
    bannerText: "Win a Meal for 2 At Earthy Picks - Day 3 of 14 Days of Joy!",
    giveawayId: "91016-rvo0qfgh"
  },
  // Day 4 (June 4th 12:00 AM - June 5th 12:00 AM)
  {
    bannerText: "Win 2 tickets to Conscious Nona's Summer Solstice Celebration - Day 4 of 14 Days of Joy!",
    giveawayId: "91047-a34l6n2x"
  },
  // Day 5 (June 5th 12:00 AM - June 6th 12:00 AM)
  {
    bannerText: "Win 2 Tickets to Conscious Dance Orlando - Day 5 of 14 Days of Joy!",
    giveawayId: "91076-s92eb5k8"
  },
  // Day 6 (June 6th 12:00 AM - June 7th 12:00 AM)
  {
    bannerText: "Win a Two Hour 1:1 Hypnotherapy Session - Day 6 of 14 Days of Joy!",
    giveawayId: "91104-5mqpl3co"
  },
  // Day 7 (June 7th 12:00 AM - June 8th 12:00 AM)
  {
    bannerText: "Win 2 VIP Tickets to Global Peace Film Festival - Day 7 of 14 Days of Joy!",
    giveawayId: "91119-7m3nfr2i"
  },
  // Day 8 (June 8th 12:00 AM - June 9th 12:00 AM)
  {
    bannerText: "Win a $108 Gift Card from Kava Culture Downtown Orlando - Day 8 of 14 Days of Joy!",
    giveawayId: "91122-q73tdr96"
  },
  // Day 9 (June 9th 12:00 AM - June 10th 12:00 AM)
  {
    bannerText: "Win a _____ at _______ - Day 9 of 14 Days of Joy!",
    giveawayId: "replace_with_id"
  },
  // Day 10 (June 10th 12:00 AM - June 11th 12:00 AM)
  {
    bannerText: "Win a _____ at _______ - Day 10 of 14 Days of Joy!",
    giveawayId: "replace_with_id"
  },
  // Day 11 (June 11th 12:00 AM - June 12th 12:00 AM)
  {
    bannerText: "Win a _____ at _______ - Day 11 of 14 Days of Joy!",
    giveawayId: "replace_with_id"
  },
  // Day 12 (June 12th 12:00 AM - June 13th 12:00 AM)
  {
    bannerText: "Win a _____ at _______ - Day 12 of 14 Days of Joy!",
    giveawayId: "replace_with_id"
  },
  // Day 13 (June 13th 12:00 AM - June 14th 12:00 AM)
  {
    bannerText: "Win a _____ at _______ - Day 13 of 14 Days of Joy!",
    giveawayId: "replace_with_id"
  },
  // Day 14 (June 14th 12:00 AM - June 15th 12:00 AM)
  {
    bannerText: "Win a _____ at _______ - Day 14 of 14 Days of Joy!",
    giveawayId: "replace_with_id"
  }
];

// The date when the first giveaway (Conscious Nona) starts
const GIVEAWAY_START_DATE = new Date('2025-06-02T00:00:00-04:00');

export function useGiveaway() {
  // For testing purposes, we can override the current date
  const testDate = useState<Date | null>('testDate', () => null);

  const getCurrentGiveaway = computed(() => {
    const now = testDate.value || new Date();
    
    // Calculate days since the start of the giveaway
    const timeDiff = now.getTime() - GIVEAWAY_START_DATE.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    // If before the start date, show the initial giveaway (Center Street)
    if (daysDiff < 0) {
      return giveawaySchedule[0];
    }

    // If after all giveaways are done (after day 13), show the last giveaway
    if (daysDiff >= 13) {
      return giveawaySchedule[giveawaySchedule.length - 1];
    }

    // Return the giveaway for the current day (adding 1 because index 0 is the initial giveaway)
    return giveawaySchedule[daysDiff + 1];
  });

  // For testing purposes
  const setTestDate = (date: Date | null) => {
    testDate.value = date;
  };

  return {
    getCurrentGiveaway,
    setTestDate // Expose this for testing
  };
}
