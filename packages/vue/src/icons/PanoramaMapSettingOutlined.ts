// This icon file is generated automatically.
import { defineComponent, h } from 'vue';
import PanoramaMapSettingOutlinedSvg from '@colelab/icons-svg/es/asn/PanoramaMapSettingOutlined';
import SensoroIcon from '../components/SensoroIcon';

export default defineComponent({
  name: 'PanoramaMapSettingOutlined',
  inheritAttrs: false,
  setup(_, { attrs, slots }) {
    return () => h(SensoroIcon as any, { ...attrs, icon: PanoramaMapSettingOutlinedSvg }, slots);
  },
});
