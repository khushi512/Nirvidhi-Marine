import { motion } from 'framer-motion';
import { User } from 'lucide-react';

// Add real team members here as details are finalized.
// `photo` and `bio` are optional — omit either to fall back to a placeholder.
interface TeamMember {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  // { name: "Full Name", role: "Rank / Title", bio: "One-line background.", photo: memberPhoto },
];

export function AboutTeam() {
  if (TEAM_MEMBERS.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="border-t border-border pt-12"
      >
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-3">
          The Founding Team
        </p>
        <p className="text-muted-foreground text-sm font-light max-w-md">
          Individual profiles for our founding team — background, service history,
          and role — are being finalized and will appear here shortly.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="border-t border-border pt-12"
    >
      <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground font-semibold mb-10">
        The Founding Team
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {TEAM_MEMBERS.map((member) => (
          <div key={member.name} className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full max-w-[220px] overflow-hidden rounded-sm bg-secondary flex items-center justify-center">
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
              ) : (
                <User className="w-10 h-10 text-muted-foreground/40" />
              )}
            </div>
            <div>
              <p className="font-serif text-lg text-foreground">{member.name}</p>
              <p className="text-xs uppercase tracking-[0.1em] text-accent font-semibold mt-1">
                {member.role}
              </p>
              {member.bio && (
                <p className="text-sm text-muted-foreground font-light leading-relaxed mt-3">
                  {member.bio}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}