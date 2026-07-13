import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { getCurrentPublishedLeadership } from "@/data/leadership";

export default function CurrentLeadershipSection() {
  const members = getCurrentPublishedLeadership();

  return (
    <section className="bg-white py-14 md:py-16">
      <div className="container-medx">
        <SectionHeader
          eyebrow="Leadership"
          title="Board of Directors and Executive Leadership"
          description="MedX’s current leadership and governance information is published only after organizational confirmation and approval."
          centered
        />

        {members.length > 0 ? (
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {members.map((member) => (
              <article
                key={member.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_18px_44px_rgba(8,27,51,0.07)]"
              >
                {member.portrait && (
                  <Image
                    src={member.portrait}
                    alt={
                      member.portraitAlt ||
                      `${member.name}, ${member.currentRole || "MedX leadership"}`
                    }
                    width={180}
                    height={180}
                    className="h-28 w-28 rounded-full object-cover"
                  />
                )}
                <h3 className="mt-5 text-xl font-black leading-tight text-[#071b33]">
                  {member.name}
                </h3>
                {member.credentials && (
                  <p className="mt-1 text-sm font-black text-[#10a66e]">
                    {member.credentials}
                  </p>
                )}
                {member.currentRole && (
                  <p className="mt-3 text-sm font-black text-slate-700">
                    {member.currentRole}
                  </p>
                )}
                {member.shortBio && (
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {member.shortBio}
                  </p>
                )}
              </article>
            ))}
          </div>
        ) : (
          <p className="mx-auto mt-8 max-w-2xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center text-sm font-bold leading-7 text-slate-600">
            Current leadership information will be published after organizational
            confirmation.
          </p>
        )}
      </div>
    </section>
  );
}
