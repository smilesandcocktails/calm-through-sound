import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const content = `# Calm Through Sounds

> Research-informed sound therapy in Bukit Panjang, Singapore.

Calm Through Sounds is a home studio offering sound therapy sessions using crystal singing bowls, gong, ocean drum, and chimes. Founded and operated by Cara, a certified sound therapist trained through Shantika Sound Therapy Training in Singapore.

## Who it's for

- People managing stress, anxiety, or burnout
- Patients undergoing treatment (as a complement to medical care)
- Caregivers who need rest
- Anyone seeking a drug-free, research-informed relaxation practice

## What makes it different

- Research-informed approach: sessions grounded in research, not mysticism
- Honest about what sound therapy can and cannot do
- Complimentary sessions offered to patients and caregivers
- Warm, private home studio in a residential neighbourhood

## Sessions

- Taster Session: 30 minutes, 1 person, $50 (July 2026 offer: $45)
- Signature Session: 60 minutes, 1 person, $120 (July 2026 offer: $100)

## Location

Bukit Panjang home studio, Singapore.

## Contact

Book via WhatsApp or complete an intake form online.

## Key articles

- How Sound Calms the Nervous System: /blog/how-sound-calms-the-nervous-system/
- Sound Therapy & Better Sleep: /blog/sound-therapy-and-better-sleep/
- Sound Therapy During Illness & Caregiving: /blog/sound-therapy-during-illness-and-caregiving/
- Myth vs Science, an Honest Guide: /blog/myth-vs-science/

## Disclaimer

Sound therapy is a complementary relaxation and wellness practice. It is not medical, psychological, or psychiatric treatment and is not a substitute for professional healthcare.
`;

  return new Response(content, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
