// These are the default texts when the tag is missing in the translated language
// If a tag is modified, it will bear "V2" after it and it will be required for translator to verify its counter part in their language
// %PLAYER% is a placeholder, it will be replaced by the player's name. "The curse on %PLAYER%" becomes "The curse on ace", for example.
// {0}, {1}... are placeholders where the extra text based on variables will be inserted. You can place that text where it fits in your own language.
var cursedEN = {
    "System": "System",
    "Curse": "Curse",
    "Tip": "Tip",
    "Error": "Error",
    "Reminder": "Reminder",
    "Error: W02": "(The curse tried to send a whisper longer than 1000 characters which the server cannot handle. Please watch your configurations to prevent this from happening. The message was trimmed. Error: W02)",
    "Error: C01": "(The curse tried to send a message longer than 1000 characters which the server cannot handle. Please watch your configurations to prevent this from happening. The message was trimmed. Error: C01)",
    "WhisperSent": "Whisper sent to {0}",
    "LarpWarn": "LARP Room detected: the curse is inactive in this room",
    "OnRestart": "Your current curses have been applied with no punishments.",
    "ERROR S011": "ERROR S011: Spam detected, the curse sent too many messages too quickly, it has been disabled. Please correct the issue before re-enabling the script. If it was a bug, please contact Ace__#5558 on discord",
    "IntenseOn": "Intense mode is on (risky).",
    "WeeklyReset": "A new week has begun, your automatic strike counter has been reset.",
    "DCPreventionOn": "DC prevention enabled, the wearer was sent back to the room she was previously locked in. If this is not a room you should be locked in, please disable the curse, relog and go into another room before reactivating the curse, avoid disturbing others.",
    "HoodMigration": "Your cursed hood was not reapplied while migrating to a newer version, use curseitem command to reapply it.",
    "InvalidCurse": "An invalid curse was found and removed, this might be caused by a new version of the club if an item was removed or moved to another group.",
    "BlockedCurse": "An attempt was made to activate the curse on a group for which the item is blocked, the curse on the related group has been lifted. Unblock the following item if you want to curse it: {0} {1}",
    "Error P04": "Error P04: The curse was deactivated because it tried to apply more than one curse to the same group. Please report this issues and how it happened. Adjust your settings accordingly to prevent this error. (Please disable conflicting curses)",
    "WarnEnforce": "Reminder: You must be on your knees when you first see someone in this room.(Someone is enforced)",
    "KneelAnger": " %PLAYER% angers the curse on her as she forgets to kneel.",
    "CurseArise": "The curse arises on  %PLAYER%'s {0}",
    "CurseLift": "The curse on  %PLAYER%'s {0} was lifted",
    "ClothesArise": "The curse arises on  %PLAYER%'s clothes",
    "ClothesLift": "The curse on  %PLAYER%'s clothes was lifted",
    "RestoredItem": "{0} was restored ({1})",
    "RemovedItem": "{0} was removed ({1})",
    "ERRORT100": "ERROR T100: you have accumulated too many transgressions. Please have your curse owner clear your transgressions list to make room for new ones (cleartrangressions command). Your oldest transgressions on your record will now be deleted one by one",
    "NotSaved": "Your curse configs were not saved. Check the console for errors and report the issue if necessary.",
    "SaveColorDone": "Your current colors in each item slot has been saved.",
    "ErrorSC07": "An error occured while trying to save your colors. Error: SC07",
    "DeckShuffledAuto": "The deck was shuffled because it was empty.",
    "DeckShuffledRequest": "The deck was shuffled because it was requested by the dealer.",
    "DeckDrawnGlobal": "You drew the following card(s): {0}",
    "DeckDrawnWhisper": "(The following card was drawn: {0})",
    "NeedIntenseOn": "(Will only work if intense mode is turned on.)",
    "OwnerModeOn": "(The wearer is running the curse in owner mode. This means no one can interact with their curse.)",
    "WarnOptinOff": "(The opt-in command {0} is disabled. The wearer needs to turn it on if they wish to.)",
    "WarnOptinWearer": 'If you wish to turn on an optin command, you need to do "{0} togglecommand {1}". Opt-in commands are usually more restrictive or troublesome. Think twice before enabling this command.',
    "WarnBlacklist": "(The command {0} is disabled. The wearer needs to remove it from their blacklist if they wish to.)",
    "WarnBlacklistWearer": 'If you wish to re-enable a command, you need to do "{0} togglecommand {1}".',
    "AFKTimerTrigger": "(Was AFK for more than 5 minutes and got punished accordingly.)",
    "DraggedOutWearerCapture": "You have been sent to the room {0} by your captor, the messages above this one are from the previous room.",
    "DraggedOutAction": "%PLAYER% was dragged out by her captor.",
    "LeashAction": "%PLAYER% was leashed out by her owner.",
    "LeashWearer": "You have been sent to the room {0} by your owner, the messages above this one are from the previous room.",
    "PunishOrgasm": "The curse on %PLAYER% punishes her for orgasming when her owner forbade her.",
    "NoRescueGambling": "Gambling Hall is disabled when the no NPC rescue curse is enabled. Turn off the curse temporarily if you wish to come in. ->Going back to the main hall <-",
    "NoRescueNursery": "The nursery is disabled when the no NPC rescue curse is enabled. Turn off the curse temporarily if you wish to come in. ->Going back to the main hall <-",
    "LockSubOn": "Cannot collar new submissives.",
    "LockSubOff": "Can collar players again.",
    "LockLoverOn": "Cannot have new lovers.",
    "LockLoverOff": "Can have new lovers.",
    "LockOwnerOn": "The curse keeps %PLAYER% from leaving her owner.",
    "LockOwnerOff": "The curse allows %PLAYER% to break her collar.",
    "LooseOwnerOn": "(Curse owners are now allowed to use built-in club rules. WARNING: These official built-in club rules are not tied to the curse, this means disabling the curse will not disable club rules like confiscating remotes, locks, or blocking wardrobe changes)",
    "LooseOwnerOff": "(Curse owners are no longer allowed to use built-in club rules.)",
    "AllShowStrikes": "%PLAYER% has accumulated a total of {0} strikes.",
    "AllShowTransgressions": "Transgression(s) to report: {0}",
    "AllShowlistoffcommands": "The following commands are disabled: {0}",
    "asylumtimeleft": "%PLAYER% has {0} hours left in the asylum",
    "OtherWhisperHelpMessage1": '(To use the curse on me, ask me about the commands... there are more available depending on your permissions [blacklist, public, mistress, owner].Commands are called with {0}, like "{1} respect")',
    "OtherWhisperHelpMessage2": "(To learn all the commands or use it for yourself, check out this repository: https://github.com/ace-1331/ace12401-cursedscript/wiki/Functions )",
    "AllReadOwnerNote": "(A note is attached to her from her owner: {0})",
    "AllNoteSent": "(Note sent to owner(s).)",
    "AllReadOrgasmCount": "(Has had {0} orgasm(s) since the last reset.)",
    "AllInvalidLanguage": '(Invalid language. Currently only "fr", "ru", "ger" and "en" are available. Anyone can contribute to add more!)',
    "AllSetDictionary": "(Dictionary set to {0}.)",
    "PublicPunish": "The curse on %PLAYER% punishes her as requested by {0}",
    "PublicReward": "The curse on %PLAYER% rewards her as requested by {0}",
    "PublicEdge": "The curse on %PLAYER% edges her as requested by {0}",
    "PublicCaptureAction": "%PLAYER% was captured by {0}",
    "PublicCaptureWhisper": "For the next 5 minutes, the wearer is unable to leave a room and can be brought into any given room by beeping them.",
    "PublicCaptureSomeoneElse": "Someone else has captured the wearer in the past 5 minutes, try again later.",
    "PublicCaptureAlready": "You have already captured the wearer.",
    "PublicCaptureDisabled": "Capture mode disabled.",
    "FullBlindfoldOn": "(All blindfolds will completely blind the wearer.)",
    "FullBlindfoldOff": "(Blindfolds will behave normally.)",
    "IsClassicOn": "The curse will act like it did before. (Messages containing transgressions will be sent, but punishments will still be applied.)",
    "IsClassicOff": "The curse will no longer act like it did before. (Messages containing transgressions will NOT be sent.)",
    "ShowTitles": "Currently set titles: {0}",
    "ShowNicknames": "Currently set nicknames: {0}",
    "InvalidItemGroup": "-->Invalid item group. Check the wiki for the list of available groups.",
    "CurseItemInvalidArgs": "(Invalid arguments. Specify the item group and number of hours the curse should stay active.)",
    "FullLengthOn": "Your chat input will now be 5 times bigger. (1000 chars long)",
    "FullLengthOff": "Your chat input will be normal again. (200 chars long)",
    "TipReset": "You can now see all the tips again.",
    "PunishmentColorDisabled": "No longer needed, use savecolors instead.",
    "GeneralInvalidArgs": "Invalid Arguments.",
    "ToggleCommandInvalid": "Invalid command -> specify the command to toggle on/off",
    "RemovedBlacklistCommand": "The {0} command was removed from your blacklist.",
    "LoginHelpOn": "You will no longer see the help message on login.",
    "LoginHelpOff": "You will see the help message on every login again.",
    "forwardallon": "Your curse will forward all whispers to you.",
    "forwardalloff": "Your curse will no longer forward unnecessary whispers.",
    "hidedisplayon": "You will no longer see who has the curse.You will no longer see who has the curse.",
    "hidedisplayoff": "You will now see who has the curse.",
    "restraintvanishon": "Your curse will remove items when the curse on them is lifted.",
    "restraintvanishoff": "Your curse will no longer remove items when the curse on them is lifted.",
    "wardrobev2on": "Enabled enhanced wardrobe. (Changes will be applied on the next reload.)",
    "wardrobev2off": "Disabled enhanced wardrobe. (Changes will be applied on the next reload.)",
    "hasCaptureModeon": "You can now be captured by anyone.",
    "hasCaptureModeoff": "You can no longer be captured.",
    "eatcommandon": "Will no longer display whispers containing valid commands.",
    "eatcommandoff": "Will resume displaying whispers containing valid commands.",
    "issilenton": "Your curse will no longer display public messages",
    "issilentoff": "Your curse will resume displaying messages publicly",
    "MissingPresetName": "(Missing argument. [preset name])",
    "NotFoundPreset": "(Preset not found)",
    "ErrorSelfOwn": "(You cannot own yourself.)",
    "RestrainPlayEnabled": "(Your owner disabled this command.)",
    "ErrorClubOwn": "(Cannot remove your official owner.)",
    "OptinCommandToggleOn": "The {0} command was set to enabled",
    "OptinCommandToggleOff": "The {0} command was set to disabled",
    "ToggleOwnerHub": "The curse is now in owner hub mode. No one will be able to interact with your curse.",
    "ToggleCommand": "The {0} command was blocked.",
    "WearerShowStrikes": "You have accumulated {0} strikes.",
    "WearerShowBlacklist": "Your blacklist: #{0}",
    "WearerTalkInvalid": "Invalid arguments. you need to specify the target id and the sentence id like '#name talk miss yes' where miss is the target id and yes is the sentence id.",
    "SelfOwnerAdd": "%PLAYER% now has a new owner ({0})",
    "SelfOwnerRemove": "Removed owner: {0}",
    "ErrorSelfMistress": "(You cannot be your own mistress.)",
    "SelfMistressAdd": "%PLAYER% now has a new mistress ({0})",
    "SelfMistressRemove": "Removed mistress: {0}",
    "QuickbanError": "Action invalid, you are not an admin.",
    "QuickbanSucceed": "Chatroom ban list updated.",
    "InvalidCommandChar": "Invalid command character: {0}",
    "ValidCommandChar": "Your command character was changed to: {0}",
    "WearerNameChange": "Your wearer identifier was changed to: {0}",
    "WearerBlacklistAdd": "Added to blacklist: {0}",
    "WearerBlacklistRemove": "Removed from blacklist: {0}",
    "WearerShowTargets": "Here are your allowed targets --> {0}",
    "WearerShowSentences": "Here are your allowed sentences --> {0}",
    "SelfMsgCheckNotifyGagOOC": "(Tried to use OOC while gagged)",
    "SelfMsgCheckWearerWarnGagOOC": "WARNING: You are not allowed to use OOC in normal chat messages while gagged.",
    "SelfMsgCheckCommandCallError": "(A command call was detected, but unidentified. Check for typos and verify your version if this was intended. This message will be processed normally.)",
    "SelfMsgCheckNotifyForceSay": "(Did not say the sentence willingly.)",
    "SelfMsgCheckWarnForceSay": "WARNING: You were punished for not saying the expected sentence willingly: {0}",
    "SelfMsgCheckNotifyRestrained": "(Tried to speak freely when her speech was restrained.)",
    "SelfMsgCheckWarnRestrained": "WARNING: You tried to speak freely while your speech is being restrained.",
    "SelfMsgCheckNotifyDisrespect": "(Tried to be disrespectful)",
    "SelfMsgCheckWarnDisrespect": "WARNING: Respecting {0} is required.",
    "SelfMsgCheckNotifyWord": "(Used banned words: {0})",
    "SelfMsgCheckWarnWord": "WARNING: Bad word(s) used: {0}",
    "SelfMsgCheckNotifySound": "(Tried to make unallowed sounds)",
    "SelfMsgCheckWarnSound": "WARNING: You made unallowed sounds. (allowed sound: {0})",
    "SelfMsgCheckNotifyContraction": "(Tried to use contractions)",
    "SelfMsgCheckWarnContraction": "WARNING: You are not allowed to use contractions!",
    "SelfMsgCheckNotifyDollLong": "(Tried to use too many words (doll talk infraction))",
    "SelfMsgCheckWarnDollLong": "WARNING: You are not allowed to use more than 5 words! (doll talk infraction)",
    "SelfMsgCheckNotifyDollMany": "(Tried to use fancy words (doll talk infraction))",
    "SelfMsgCheckWarnDollMany": "WARNING: You are not allowed to use words with more than 6 letters! (doll talk infraction)",
    "PunishmentTriggered": "The curse on %PLAYER% punishes her.",
    "ErrorInvalidPunishment": "An invalid punishment restraint was found and removed, this might be caused by a new version of the club if an item was removed or moved to another group.",
    "AppearanceCheckKneel": "The curse on %PLAYER%'s forces her back down to her knees.",
    "AppearanceCheckRestore1": "The curse on %PLAYER% restores her cursed item.",
    "AppearanceCheckRestoreMany": "The curse on %PLAYER% restores her cursed items.",
    "AppearanceCheckRemove1": "The curse on %PLAYER% removes forbidden item.",
    "AppearanceCheckRemoveMany": "The curse on %PLAYER% removes forbidden items.",
    "AppearanceCheckVibe": "The curse on %PLAYER% brings her vibrators back to their required intensity.",
    "MsgCheckActiveMsg": "(The curse is active. Command call id: {0})",
    "MsgCheckErrorNonWhisper": "--> Command cancelled. Please use commands in whispers to prevent spam.",
    "TxtCommand": "Command:",
    "TxtOutput": "Ouputs:",
    "MsgCheckCommandInvalid": "(Invalid command: A command was possibly requested, but no matching command was found. Check for typos , or verify your version number and curse settings. Info about the person who sent the command: Club owner: {0}, Curse owner: {1}, Mistress: {2}, Public access: {3}, Full public access: {4})",
    "MsgCheckAngerMute": "%PLAYER% angers the curse by speaking when she is not allowed to.",
    "MsgCheckFreezeReset": "Freeze timer reset.",
    "MsgCheckFreezeAction": "%PLAYER% freezes as her trigger word is said.",
    "MsgCheckUnfreezeAction": "%PLAYER% unfreezes as her trigger word is said once more.",
    "MistressInvalidProvideOnOff": "(Invalid arguments. Make sure you provided on or off.)",
    "MistressSavedColor": "(Colors saved.)",
    "MistressContractionOn": "(Can no longer use contractions.)",
    "MistressContractionOff": "(Can now use contractions.)",
    "MistressCurseItemInvalidGroup": "(Invalid arguments. Specify the item group.)",
    "MistressChangeStrikeAdd": "%PLAYER% has had {0} strikes added to her strike counter.",
    "MistressChangeStrikeRemove": "%PLAYER% has had {0} strikes subtracted to her strike counter.",
    "MistressDeacPresOn": "-->Curse is deactivated while a mistress is present",
    "MistressDeacPresOff": "-->Curse activated while a mistress is present",
    "MistressDolltalkOn": "The curse on %PLAYER% stops her from speaking in details.",
    "MistressDolltalkOff": "The curse on %PLAYER% allows her to speak normally again.",
    "MistressNormalMuteOn": "The curse on  %PLAYER% forbids her to speak.",
    "MistressNormalMuteOff": "The curse on %PLAYER% allows her to use her words again.",
    "MistressNewBanWord": "New banned word: {0}",
    "MistressRemoveBanWord": "Word allowed {0}",
    "MistressBeggingOn": "(Begging blocked.)",
    "MistressBeggingOff": "(Begging allowed.)",
    "Mistress1stBlock": "(First person blocked.)",
    "Mistress1stAllow": "(First person allowed.)",
    "MistressRename": "New nickname for {0}: {1}",
    "MistressPresetSave": "Preset Saved: {0}",
    "MistressPresetLoadWarning": "(This feature is to load a frequently used set of cursed items easily instead of spamming the same command over and over again. It is not intended as a 'quick tie' function. Please do not use it as such.)",
    "MistressPresetLoadMsg": "The curse on %PLAYER% restores her cursed state ({0})",
    "MistressOldCommandCurseItem": "(Command deprecated in favor of curseitem.)",
    "MistressBasePublicOn": "(Public access enabled.)",
    "MistressBasePublicOff": "(Public access disabled.)",
    "MistressPermaKneelOn": "The curse prevents %PLAYER% from standing up.",
    "MistressPermaKneelOff": "The curse allows %PLAYER% to stand again.",
    "MistressCurseSpeechsOn": "The curse arises on %PLAYER%'s mouth",
    "MistressCurseSpeechsOff": "The curse on %PLAYER%'s mouth vanished.",
    "MistressCurseVibesOn": "The curse arises on %PLAYER%'s vibrating toys.",
    "MistressCurseVibesOff": "The curse on %PLAYER%'s vibrating toys vanished.",
    "MistressCurseVibesInt-1": "%PLAYER%'s vibrators were turned off.",
    "MistressCurseVibesInt0": "%PLAYER%'s vibrators were set to low intensity.",
    "MistressCurseVibesInt1": "%PLAYER%'s vibrators were set to medium intensity.",
    "MistressCurseVibesInt2": "%PLAYER%'s vibrators were set to high intensity.",
    "MistressCurseVibesInt3": "%PLAYER%'s vibrators were set to maximum intensity.",
    "MistressCurseVibesError": "(Invalid command call: please provide the speed [off, low, normal, high, max].)",
    "MistressDeafImmWhisperWarn": "(If you meant to add/remove someone to the list, use the same command and provide a member number.)",
    "MistressDeafImmWhisperList": "The following people's voice will not be deafened: {0}",
    "PrivateShowEnforced": "Enforced list: {0}",
    "PrivateShowMistress": "Mistresses: #{0}",
    "PrivateShowOwner": "Owners: #{0}",
    "PrivateShowSpeechRestriction": "Here are the speech constraints --> Members to respect: {0}, Banned words: {1}, Contractions Ban: {2} , Muted: {3} , Sound: {4}, Entry message: {5}, Restrained speech mode: {6}, Doll talk: {7}, OOC while gagged: {8}, must retype messages: {9}.",
    "OwnerTriggerWordSet": "Wearer's trigger word was set to: {0}",
    "OwnerTriggerWordRemove": "Wearer's trigger word was removed.",
    "OwnerTriggerDurationError": "(Invalid arguments. Please provide the number of minutes the effects of the trigger word should last for.)",
    "OwnerTriggerDurationSet": "Wearer's trigger word effects duration changed to: {0} minutes",
    "OwnerPunRestrainErr1": "(Invalid arguments. Specify the stage (1 to 10) and the restraint group to scan for a current restraint.)",
    "OwnerPunRestrainErr2": "(Invalid arguments. Punishment stage must be a number between 1 and 10.)",
    "OwnerPunRestrainErr3": "(Invalid arguments. Target group does not contain a restraint.)",
    // --LAST RU TRANSLATION HERE--
    "FullSlowOff": "(Wearer will no longer be slowed permanently.)",
    "FullSlowOn": "(Wearer will now always be slowed.)",
    "forcedRestraintsSettingOff": "(Wearer will no longer be forced keep all restraints when relogging.)",
    "forcedRestraintsSettingOn": "(Wearer will be forced to keep all restraints when relogging.)",
};