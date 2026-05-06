'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Database, Trash2, Users, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const translations = {
  en: {
    title: "Privacy Policy",
    lastUpdated: "Last Updated: January 1, 2026",
    backToHome: "Back to Home",
    intro: "At Maya Bot, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your information when you use our Discord bot.",
    sections: [
      {
        title: "1. Information We Collect",
        content: "We collect minimal information necessary to provide our services, including: User ID, Username (from Discord), Server IDs where Maya Bot is used, Music playback history, Basic usage statistics. We do NOT collect personal information such as email addresses, phone numbers, or physical addresses.",
        icon: "database"
      },
      {
        title: "2. How We Use Your Information",
        content: "Your information is used to: Provide music playback functionality, Maintain service quality and performance, Prevent abuse and ensure fair usage, Generate usage statistics (anonymized), Send important updates about the bot. We never sell or share your personal data with third parties.",
        icon: "users"
      },
      {
        title: "3. Data Storage and Security",
        content: "All collected data is stored securely and encrypted. User data is stored in compliance with modern security standards. We regularly update our security protocols to protect your information from unauthorized access, alteration, or disclosure.",
        icon: "lock"
      },
      {
        title: "4. Data Retention",
        content: "We retain user data only as long as necessary to provide our services. Playback history is automatically deleted after 30 days. Inactive accounts may have their data deleted after 6 months of inactivity. You can request deletion of your data at any time through our Discord support.",
        icon: "trash2"
      },
      {
        title: "5. Discord Integration",
        content: "Maya Bot operates within Discord's platform. We adhere to Discord's Terms of Service and privacy guidelines. Some data may be shared with Discord for the purpose of providing our services. Discord's privacy policy also applies to your use of Maya Bot.",
        icon: "shield"
      },
      {
        title: "6. Cookies and Tracking",
        content: "Maya Bot does not use cookies or similar tracking technologies. We do not track users across different services. Our website may use Discord's OAuth system for authentication purposes.",
        icon: "shield"
      },
      {
        title: "7. Third-Party Services",
        content: "Maya Bot uses third-party services to deliver music content (e.g., YouTube, Spotify, SoundCloud). These services have their own privacy policies. By using Maya Bot, you agree to comply with their terms of service and privacy policies.",
        icon: "shield"
      },
      {
        title: "8. User Rights",
        content: "You have the right to: Access your personal data we hold, Request correction of inaccurate data, Request deletion of your data, Opt-out of non-essential data collection, Export your data in a machine-readable format. Contact our Discord support to exercise these rights.",
        icon: "users"
      },
      {
        title: "9. Children's Privacy",
        content: "Maya Bot is not directed to children under 13. We do not knowingly collect personal information from children under 13. If we discover we have collected such information, we will delete it immediately.",
        icon: "shield"
      },
      {
        title: "10. Changes to This Policy",
        content: "We may update this Privacy Policy from time to time. We will notify users of significant changes via our Discord server. Continued use of Maya Bot after changes constitutes acceptance of the new policy.",
        icon: "lock"
      },
      {
        title: "11. Contact Information",
        content: "If you have questions about this Privacy Policy or our data practices, please contact us through our Discord server. We are committed to addressing your privacy concerns promptly and transparently.",
        icon: "mail"
      }
    ]
  },
  vi: {
    title: "Chính Sách Quyền Riêng Tư",
    lastUpdated: "Cập nhật lần cuối: 1 tháng 1, 2026",
    backToHome: "← Quay lại Trang chủ",
    intro: "Tại Maya Bot, chúng tôi coi trọng quyền riêng tư của bạn. Chính Sách Quyền Riêng Tư này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin của bạn khi bạn sử dụng Discord bot của chúng tôi.",
    sections: [
      {
        title: "1. Thông Tin Chúng Tôi Thu Thập",
        content: "Chúng tôi thu thập thông tin tối thiểu cần thiết để cung cấp dịch vụ của mình, bao gồm: User ID, Tên đăng nhập (từ Discord), Server IDs nơi Maya Bot được sử dụng, Lịch sử phát nhạc, Thống kê sử dụng cơ bản. Chúng tôi KHÔNG thu thập thông tin cá nhân như địa chỉ email, số điện thoại, hoặc địa chỉ vật lý.",
        icon: "database"
      },
      {
        title: "2. Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn",
        content: "Thông tin của bạn được sử dụng để: Cung cấp chức năng phát nhạc, Duy trì chất lượng và hiệu suất dịch vụ, Ngăn chặn lạm dụng và đảm bảo sử dụng công bằng, Tạo thống kê sử dụng (ẩn danh), Gửi các cập nhật quan trọng về bot. Chúng tôi không bao giờ bán hoặc chia sẻ dữ liệu cá nhân của bạn với bên thứ ba.",
        icon: "users"
      },
      {
        title: "3. Lưu Trữ và Bảo Mật Dữ Liệu",
        content: "Tất cả dữ liệu được thu thập đều được lưu trữ an toàn và mã hóa. Dữ liệu người dùng được lưu trữ tuân thủ các tiêu chuẩn bảo mật hiện đại. Chúng tôi thường xuyên cập nhật các giao thức bảo mật của mình để bảo vệ thông tin của bạn khỏi quyền truy cập, chỉnh sửa hoặc tiết lộ trái phép.",
        icon: "lock"
      },
      {
        title: "4. Giữ Lại Dữ Liệu",
        content: "Chúng tôi giữ dữ liệu người dùng chỉ trong khoảng thời gian cần thiết để cung cấp dịch vụ. Lịch sử phát nhạc sẽ tự động bị xóa sau 30 ngày. Các tài khoản không hoạt động có thể bị xóa dữ liệu sau 6 tháng không hoạt động. Bạn có thể yêu cầu xóa dữ liệu của mình bất cứ lúc nào qua hỗ trợ Discord của chúng tôi.",
        icon: "trash2"
      },
      {
        title: "5. Tích Hợp Discord",
        content: "Maya Bot hoạt động trong nền tảng của Discord. Chúng tôi tuân thủ Điều khoản Dịch vụ và hướng dẫn quyền riêng tư của Discord. Một số dữ liệu có thể được chia sẻ với Discord nhằm mục đích cung cấp dịch vụ của mình. Chính sách quyền riêng tư của Discord cũng áp dụng cho việc sử dụng Maya Bot của bạn.",
        icon: "shield"
      },
      {
        title: "6. Cookies và Theo Dõi",
        content: "Maya Bot không sử dụng cookies hoặc các công nghệ theo dõi tương tự. Chúng tôi không theo dõi người dùng trên các dịch vụ khác nhau. Website của chúng tôi có thể sử dụng hệ thống OAuth của Discord cho mục đích xác thực.",
        icon: "shield"
      },
      {
        title: "7. Dịch Vụ Bên Thứ Ba",
        content: "Maya Bot sử dụng các dịch vụ bên thứ ba để cung cấp nội dung nhạc (ví dụ: YouTube, Spotify, SoundCloud). Các dịch vụ này có chính sách quyền riêng tư riêng của chúng. Bằng cách sử dụng Maya Bot, bạn đồng ý tuân thủ điều khoản dịch vụ và chính sách quyền riêng tư của họ.",
        icon: "shield"
      },
      {
        title: "8. Quyền Của Người Dùng",
        content: "Bạn có quyền: Truy cập dữ liệu cá nhân mà chúng tôi giữ, Yêu cầu chỉnh sửa dữ liệu không chính xác, Yêu cầu xóa dữ liệu của bạn, Không tham gia vào việc thu thập dữ liệu không cần thiết, Xuất dữ liệu của bạn ở định dạng có thể đọc bằng máy. Hãy liên hệ hỗ trợ Discord của chúng tôi để thực hiện các quyền này.",
        icon: "users"
      },
      {
        title: "9. Quyền Riêng Tư Của Trẻ Em",
        content: "Maya Bot không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi. Nếu chúng tôi phát hiện đã thu thập thông tin đó, chúng tôi sẽ xóa ngay lập tức.",
        icon: "shield"
      },
      {
        title: "10. Thay Đổi Đối Với Chính Sách Này",
        content: "Chúng tôi có thể cập nhật Chính Sách Quyền Riêng Tư này theo thời gian. Chúng tôi sẽ thông báo cho người dùng về các thay đổi quan trọng qua máy chủ Discord của mình. Việc tiếp tục sử dụng Maya Bot sau khi thay đổi cấu thành chấp nhận chính sách mới.",
        icon: "lock"
      },
      {
        title: "11. Thông Tin Liên Hệ",
        content: "Nếu bạn có câu hỏi về Chính Sách Quyền Riêng Tư này hoặc các thực tiệp dữ liệu của chúng tôi, vui lòng liên hệ với chúng tôi qua máy chủ Discord. Chúng tôi cam kết giải quyết các lo ngại về quyền riêng tư của bạn một cách nhanh cháng và minh bạch.",
        icon: "mail"
      }
    ]
  },
  hi: {
    title: "गोपनीयता नीति",
    lastUpdated: "अंतिम अपडेट: 1 जनवरी 2026",
    backToHome: "← होम पर वापस",
    intro: "माया बॉट में, हम आपकी गोपनीयता को गंभीरत्वपूर्ण लेते हैं। यह गोपनीयता नीति समझाती है कि जब आप हमारे डिस्कॉर्ड बॉट का उपयोग करते हैं तो हम आपकी जानकारी को कैसे एकत्रित करते, उपयोग करते और सुरक्षित करते हैं।",
    sections: [
      {
        title: "1. हम जो जानकारी एकत्रित करते हैं",
        content: "हम अपनी सेवाएं प्रदान करने के लिए न्यूनतम जानकारी एकत्रित करते हैं, जिसमें शामिल हैं: यूजर आईडी, उपयोगकर्ता नाम (डिस्कॉर्ड से), सर्वर आईडी जहां माया बॉट उपयोग किया जाता है, संगीत चलाने का इतिहास, मूलभूत उपयोग आँकड़े। हम व्यक्तिग जानकारी एकत्रित नहीं करते, जैसे ईमेल पते, फोन नंबर, या भौतिक पते।",
        icon: "database"
      },
      {
        title: "2. हम आपकी जानकारी का उपयोग कैसे करते हैं",
        content: "आपकी जानकारी का उपयोग किया जाता है: संगीत चलाने की कार्यक्षमता प्रदाना, सेवा की गुणवत्ता और प्रदर्शन बनाए रखना, दुरुपयोग रोकना और निष्पक उपयोग सुनिश्चित करना, उपयोग आँकड़े (बेनामीकृत), बॉट के बारे में महत्वपूर्ण अपडेट भेजना। हम कभी आपकी व्यक्तिग जानकारी को तीसरे पक्षों के साथ बेचते या साझा नहीं करते।",
        icon: "users"
      },
      {
        title: "3. डेटा संग्रहण और सुरक्षा",
        content: "सभी एकत्रित किए गए डेटा को सुरक्षित रूप से संग्रहित और एन्क्रिप्ट किया जाता है। यूजर डेटा आधुनिक सुरक्षा मानकों के अनुरूप में संग्रहित किया जाता है। हम अपनी सुरक्षा प्रोटोकॉल को नियमित रूप से अपडेट करते हैं ताकि आपकी जानकारी को अनधिकृत अभिगम, बदलाव या प्रकट से सुरक्षित रखा जा सके।",
        icon: "lock"
      },
      {
        title: "4. डेटा अवधारण",
        content: "हम डेटा को तब तक रखते हैं जब तक हमारी सेवाएं प्रदाने के लिए आवश्यक हो। चलाने का इतिहास 30 दिनों के बाद स्वचालित रूप से हटा दिया जाता है। अक्रिय खाते खाते का डेटा 6 महीने की अक्रियता के बाद हटा दिया जा सकता है। आप किसी भी समय हमारे डिस्कॉर्ड समर्थन के माध्यम से अपने डेटा को हटाने का अनुरोध कर सकते हैं।",
        icon: "trash2"
      },
      {
        title: "5. डिस्कॉर्ड एकीकरण",
        content: "माया बॉट डिस्कॉर्ड के मंच के भीतर कार्य करता है। हम डिस्कॉर्ड के सेवा के नियम और गोपनीयता दिशानिर्देशों का पालन करते हैं। अपनी सेवाएं प्रदाने के लिए कुछ डेटा डिस्कॉर्ड के साथ साझा किया जा सकता है। डिस्कॉर्ड की गोपनीयता नीति भी माया बॉट के उपयोग पर लागू होती है।",
        icon: "shield"
      },
      {
        title: "6. कुकीज और ट्रैकिंग",
        content: "माया बॉट कुकीज या समान ट्रैकिंग तकनीकों का उपयोग नहीं करता। हम उपयोगकर्ताओं को विभिन्न सेवाओं में ट्रैक नहीं करते। हमारी वेबसाइट प्रमाणीकरण के उद्देश्यों के लिए डिस्कॉर्ड के OAuth सिस्टम का उपयोग कर सकती है।",
        icon: "shield"
      },
      {
        title: "7. तीसरे पार्टी सेवाएं",
        content: "माया बॉट संगीत सामग्री प्रदान करने के लिए तीसरे पक्षों की सेवाओं का उपयोग करता है (जैसे, YouTube, Spotify, SoundCloud)। इन सेवाओं की अपनी गोपनीयता नीतियां हैं। माया बॉट का उपयोग करके, आप उनके सेवा के नियम और गोपनीयता नीतियों का पालन करने के लिए सहमति देते हैं।",
        icon: "shield"
      },
      {
        title: "8. उपयोगकर्ता के अधिकार",
        content: "आपको यह अधिकार है: हमारे पास व्यक्तिग डेटा तक पहुंच करें, गलत डेटा के सुधार का अनुरोध करें, अपने डेटा को हटाने का अनुरोध करें, गैर-आवश्यक डेटा संग्रहण से बाहर निकलें, अपने डेटा को मशीन-पठनीय फॉर्मेट में निर्यात करें। इन अधिकारों का प्रयोग करने के लिए हमारे डिस्कॉर्ड समर्थन से संपर्क करें।",
        icon: "users"
      },
      {
        title: "9. बच्चों की गोपनीयता",
        content: "माया बॉट 13 वर्ष से कम उम्र के बच्चों के लिए नहीं है। हम जानबूरकर 13 वर्ष से कम उम्र के बच्चों से व्यक्तिग जानकारी एकत्रित नहीं करते। यदि हमें पता चले कि हमने ऐसी जानकारी एकत्रित की है, तो हम उसे तुरंत मिटा देंगे।",
        icon: "shield"
      },
      {
        title: "10. इस नीति में बदलाव",
        content: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। हम महत्वपूर्ण बदलावों की जानकारी हमारे डिस्कॉर्ड सर्वर के माध्यम से देंगे। बदलाव के बाद माया बॉट का उपयोग जारी रखना नई नीति की स्वीकृति माना जाएगा।",
        icon: "lock"
      },
      {
        title: "11. संपर्क जानकारी",
        content: "यदि आपके इस गोपनीयता नीति या हमारे डेटा अभ्यासों के बारे में कोई प्रश्न है, तो कृपया हमारे डिस्कॉर्ड सर्वर के माध्यम से संपर्क करें। हम आपकी गोपनीयता संबंधनाओं को तुरंत और पारदर्शित रूप से हल करने के लिए प्रतिबद्ध हैं।",
        icon: "mail"
      }
    ]
  }
};

export default function PrivacyPage() {
  const { language, setLanguage } = useLanguage();

  const currentTranslations = translations[language as keyof typeof translations] || translations.en;

  const getIcon = (iconName: string) => {
    const icons: any = { database: Database, users: Users, lock: Lock, trash2: Trash2, shield: Shield, mail: Mail };
    return icons[iconName] || Shield;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8">
            <Button
              variant="outline"
              onClick={() => window.location.href = '/'}
              className="mb-6"
            >
              {currentTranslations.backToHome}
            </Button>

            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-700 to-pink-600 bg-clip-text text-transparent">
                  {currentTranslations.title}
                </h1>
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value as any)}
                  className="px-4 py-2 rounded-lg border-2 border-purple-300 dark:border-purple-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white cursor-pointer"
                >
                  <option value="en">English</option>
                  <option value="vi">Tiếng Việt</option>
                  <option value="hi">हिंदी</option>
                </select>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-400 mt-2">
              {currentTranslations.lastUpdated}
            </p>
          </div>

          <Card className="mb-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-6 h-6 text-purple-600" />
                {currentTranslations.intro}
              </CardTitle>
            </CardHeader>
          </Card>

          <div className="space-y-6">
            {currentTranslations.sections.map((section, index) => {
              const Icon = getIcon(section.icon);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl md:text-2xl flex items-center gap-2">
                        <Icon className="w-6 h-6 text-purple-600" />
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <Card className="mt-8 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
            <CardContent className="p-6 text-center">
              <Lock className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">
                Privacy Matters
              </h3>
              <p className="opacity-90 mb-4">
                Your privacy is our priority. If you have any concerns, please reach out to us.
              </p>
              <Button
                variant="outline"
                className="bg-white/20 hover:bg-white/30 text-white border-white"
                onClick={() => window.open('https://discord.gg/TyQbkCVPr6', '_blank')}
              >
                Contact Us on Discord
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
